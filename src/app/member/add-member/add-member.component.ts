import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../services/member/member.service";
import {Member} from "../../models/member.model";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit{
  member: {
    nationality: string;
    identityNumber: string;
    num: number;
    familyName: string;
    name: string;
    identityDocumentType: string;
    id: number;
    accessionDate: string
  } = {
    id: 0,
    num: 0,
    name: '',
    familyName: '',
    accessionDate: '',
    nationality: '',
    identityDocumentType: '',
    identityNumber: ''
  }
  options = [
    { value: 1, label: 'CIN' },
    { value: 2, label: 'PASSPORT' },
    { value: 3, label: 'CARTE_RESIDENCE' },
    // ... more options
  ];
  constructor(private service: MemberService) {
  }

  ngOnInit() {
  }
  public createMember(member: {
    nationality: string;
    identityNumber: string;
    num: number;
    familyName: string;
    name: string;
    identityDocumentType: string;
    id: number;
    accessionDate: string
  }) {
    this.service.addMember(member)
      .subscribe({
        next: () => {
          console.log(member);
        },
        error: err => {
          console.log(err);
        }
      })
  }
}
