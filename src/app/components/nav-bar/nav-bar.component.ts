import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  actions : Array<any> = [
    {title: "Home", link: ""},
    {title: "Competitions", link: "/competitions"},
    {title: "Members", link: "/members"},
  ];

  isAuthentificated: boolean = false;

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('isAuthentificated')!)){
      this.isAuthentificated = true;
    }else {
      this.isAuthentificated = false;
    }
    this.currentAction = this.actions[0];
  }

  constructor(protected service: AuthenticationService,
              private route:Router) {
  }

  currentAction: any;
  setCurrentAction(action: any) {
    this.currentAction = action;
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleClickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('#mobile-menu-button')) {
      this.isMenuOpen = false;
    }
  }

  handleIconClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleLogout() {
    this.service.logout();
    this.isMenuOpen = false;
    this.route.navigateByUrl("/login");
  }
}
