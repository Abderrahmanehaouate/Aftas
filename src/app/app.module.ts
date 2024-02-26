import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCompetitionComponent } from './components/competition/create-competition/create-competition.component';
import { ListCompetitionComponent } from './components/competition/list-competition/list-competition.component';
import { IndexComponent } from './home/index/index.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ListMemberComponent } from './components/member/list-member/list-member.component';
import { ShowCompetitionComponent } from './components/competition/show-competition/show-competition.component';
import { ShowMemberComponent } from './components/member/show-member/show-member.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { ManagerTemplateComponent } from './components/manager-template/manager-template.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {AppHttpInterceptor} from "./interceptors/app-http.interceptor";
import { RegisterComponent } from './components/register/register.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCompetitionComponent,
    ListCompetitionComponent,
    IndexComponent,
    ListMemberComponent,
    ShowCompetitionComponent,
    ShowMemberComponent,
    LoginComponent,
    ManagerTemplateComponent,
    NavBarComponent,
    RegisterComponent,
    NotAuthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
