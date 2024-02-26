import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./home/index/index.component";
import {CreateCompetitionComponent} from "./components/competition/create-competition/create-competition.component";
import {ListCompetitionComponent} from "./components/competition/list-competition/list-competition.component";
import {ListMemberComponent} from "./components/member/list-member/list-member.component";
import {ShowMemberComponent} from "./components/member/show-member/show-member.component";
import {ShowCompetitionComponent} from "./components/competition/show-competition/show-competition.component";
import {LoginComponent} from "./components/login/login.component";
import {ManagerTemplateComponent} from "./components/manager-template/manager-template.component";
import {authenticationGuard} from "./guards/authentication.guard";
import {RegisterComponent} from "./components/register/register.component";
import {authorizationGuard} from "./guards/authorization.guard";
import {NotAuthorizedComponent} from "./components/not-authorized/not-authorized.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "", component: IndexComponent, canActivate: [authenticationGuard]},
  {path: "manager", component: ManagerTemplateComponent, canActivate: [authenticationGuard]},
  {path: "competitions", component: ListCompetitionComponent, canActivate: [authenticationGuard]},
  {path: "competitions/create", component: CreateCompetitionComponent , canActivate: [authorizationGuard, authenticationGuard], data: {roles: "MANAGER"}},
  {path: "competitions/show/:id", component: ShowCompetitionComponent, canActivate: [authorizationGuard, authenticationGuard], data: {roles: "MANAGER"}},
  {path: "members", component: ListMemberComponent, canActivate: [authenticationGuard]},
  {path: "members/show/:id", component: ShowMemberComponent, canActivate: [authenticationGuard]},
  {path: "not-authorized", component: NotAuthorizedComponent, canActivate: [authenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
