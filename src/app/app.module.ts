import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCompetitionComponent } from './competition/create-competition/create-competition.component';
import { ListCompetitionComponent } from './competition/list-competition/list-competition.component';
import { AddMemberComponent } from './member/add-member/add-member.component';
import { IndexComponent } from './home/index/index.component';
import {HttpClientModule} from "@angular/common/http";
import { ListMemberComponent } from './member/list-member/list-member.component';
import { ShowCompetitionComponent } from './competition/show-competition/show-competition.component';
import { ShowMemberComponent } from './member/show-member/show-member.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CreateCompetitionComponent,
    ListCompetitionComponent,
    AddMemberComponent,
    IndexComponent,
    ListMemberComponent,
    ShowCompetitionComponent,
    ShowMemberComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
