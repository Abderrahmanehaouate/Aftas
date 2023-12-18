import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aftas';
  actions : Array<any> = [
    {title: "Home", link: ""},
    {title: "Competitions", link: "/competitions"},
    {title: "Members", link: "/members"},
  ];

  currentAction: any;
  setCurrentAction(action: any) {
    this.currentAction = action;
  }
}
