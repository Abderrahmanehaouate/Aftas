import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Aftas';
  actions : Array<any> = [
    {title: "Home", link: ""},
    {title: "Competitions", link: "/competitions"},
    {title: "Members", link: "/members"},
  ];

ngOnInit() {
    this.currentAction = this.actions[0];
  }

  constructor() {
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

  handlleLogout() {

  }
}
