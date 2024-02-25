import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./home/index/index.component";
import {CreateCompetitionComponent} from "./components/competition/create-competition/create-competition.component";
import {ListCompetitionComponent} from "./components/competition/list-competition/list-competition.component";
import {ListMemberComponent} from "./components/member/list-member/list-member.component";
import {AddMemberComponent} from "./components/member/add-member/add-member.component";
import {ShowMemberComponent} from "./components/member/show-member/show-member.component";
import {ShowCompetitionComponent} from "./components/competition/show-competition/show-competition.component";
import {LoginComponent} from "./components/login/login.component";
import {ManagerTemplateComponent} from "./components/manager-template/manager-template.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", component: IndexComponent},
  {path: "manager", component: ManagerTemplateComponent},
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
