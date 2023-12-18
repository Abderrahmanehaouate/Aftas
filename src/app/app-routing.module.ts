import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./home/index/index.component";
import {CreateCompetitionComponent} from "./competition/create-competition/create-competition.component";
import {ListCompetitionComponent} from "./competition/list-competition/list-competition.component";
import {ListMemberComponent} from "./member/list-member/list-member.component";
import {AddMemberComponent} from "./member/add-member/add-member.component";
import {ShowMemberComponent} from "./member/show-member/show-member.component";
import {ShowCompetitionComponent} from "./competition/show-competition/show-competition.component";

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "competitions", component: ListCompetitionComponent},
  {path: "competitions/create", component: CreateCompetitionComponent},
  {path: "competitions/show/:id", component: ShowCompetitionComponent},
  {path: "members", component: ListMemberComponent},
  {path: "members/create", component: AddMemberComponent},
  {path: "members/show/:id", component: ShowMemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
