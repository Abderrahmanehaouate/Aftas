import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../services/member/member.service";
import {Member} from "../../models/member.model";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit{

    members: Array<Member> = [];
    totalPages: number = 0;
    pageSize:number = 5;
    currentPage: number = 1;

    searchTerm: string = '';
    filteredMembers: any;
    constructor(private service:MemberService) {
    }
    ngOnInit() {
      this.getAllMembers();
        this.getcountMembers();
    }
    numbersofMembers: number = 0;
    private getcountMembers() {
        this.service.countMembers()
            .subscribe({
            next: (data) => {
                this.numbersofMembers = data;
            },
            error: err => {
                console.error(err);
            }
            });
    }

    filterMembers() {
        if (!this.searchTerm || this.searchTerm.trim() === '') {
            // If the search term is empty, reset to all members
            this.filteredMembers = this.members;
        } else {
            // Filter members based on the search term
            this.filteredMembers = this.members.filter((member: any) =>
                this.memberMatchesSearchTerm(member, this.searchTerm)
            );
        }
    }

    // Custom member search logic
    memberMatchesSearchTerm(member: any, searchTerm: string): boolean {
        const searchTermLowerCase = searchTerm.toLowerCase();
        return (
            member.familyName.toLowerCase().includes(searchTermLowerCase) ||
            member.name.toLowerCase().includes(searchTermLowerCase) ||
            member.num.toString().includes(searchTermLowerCase)
        );
    }
     getAllMembers() {
      this.service.getAllMembers(this.currentPage,this.pageSize)
        .subscribe({
          next: (resp) => {
            this.members = resp.body as Member[];
            this.filteredMembers = this.members;
            let totalMembers = this.numbersofMembers;
            console.log(totalMembers);
            this.totalPages = Math.floor(totalMembers / this.pageSize);
            console.log(this.totalPages);
            if(totalMembers % this.pageSize != 0){
              this.totalPages = this.totalPages++;
            }
          },
          error: err => {
            console.error(err);
          }
        });
    }
    handleGoToPage(page: number) {
        this.currentPage = page;
        this.getAllMembers();
    }

    public  deleteMemberById(id: any, event: Event){
      event.preventDefault();
      // if(confirm("Are you sure you want to delete this member?"))
      this.service.deleteMemberById(id)
        .subscribe({
          next: () => {
            this.members = this.members.filter((member: { id: any; }) => member.id !== id);
            console.log("Member deleted successfully")
          },
          error: err => {
            console.error(err);
          }
        })
    }
}
