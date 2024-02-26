import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userFormGroup!: FormGroup;
  error: string = "";

    constructor( private formBuilder:FormBuilder,
      private service:AuthenticationService,
                 private route:Router) { }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    });
    }

  login(){

      let email :string = this.userFormGroup.value.email.trim();
      let password :string = this.userFormGroup.value.password.trim();

      this.service.login(email,password).subscribe({
        next: (data) => {
          console.log(data);
          this.service.loadProfile(data);
        },
        error: (err) => {
          console.log(err);
          this.error = err.error.message;
        }
      });
  }
}
