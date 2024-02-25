import {Component, OnInit, Input} from '@angular/core';
import {MemberService} from "../../../services/member.service";
import {ActivatedRoute} from "@angular/router";
import {Member} from "../../../models/member.model";

@Component({
  selector: 'app-show-member',
  templateUrl: './show-member.component.html',
  styleUrls: ['./show-member.component.css']
})
export class ShowMemberComponent implements OnInit{
  member!: Member ;

  constructor(private route: ActivatedRoute, private service: MemberService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const memberId = params['id'];
      this.getMemberById(memberId);
    });
  }
  getMemberById(id: any){
    this.service.getMemberById(id)
      .subscribe({
        next: data => {
          this.member = data
          console.log(data)
        },
        error: err => {
          console.error(err);
        }
      });
  }
}
