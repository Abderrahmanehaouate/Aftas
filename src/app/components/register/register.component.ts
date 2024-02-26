import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../services/member.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Member} from "../../models/member.model";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  options! : Array<any>;

  registerFormGroup!: FormGroup;
  member!: Member;

  constructor(private service: AuthenticationService,
              private route:Router,
              private formBuilder:FormBuilder,

              ) {
  }

  ngOnInit() {

    this.options = [
      { value: 'CIN', label: 'CIN' },
      { value: 'PASSPORT', label: 'PASSPORT' },
      { value: 'CARTE_RESIDENCE', label: 'CARTE RESIDENCE'}
    ];

    this.registerFormGroup = this.formBuilder.group({
      num: this.formBuilder.control(''),
      name: this.formBuilder.control(''),
      familyName: this.formBuilder.control(''),
      identityDocumentType: this.formBuilder.control(''),
      identityNumber: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      nationality: this.formBuilder.control(''),
      accessionDate: this.formBuilder.control(''),
    });
  }

  onRegister() {
    this.member = this.registerFormGroup.value;
    this.service.registerMember(this.member).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl("/login");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
