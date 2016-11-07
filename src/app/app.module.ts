import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { MdCard, MdCardTitle, MdCardSubtitle } from '@angular2-material/card';
import { MdToolbar, MdToolbarRow } from '@angular2-material/toolbar';
import { MdSidenav, MdSidenavLayout } from '@angular2-material/sidenav';
import { MdList, MdListItem } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    routedComponents,
    MdCard,
    MdCardTitle,
    MdCardSubtitle,
    MdToolbar,
    MdToolbarRow,
    MdSidenav,
    MdSidenavLayout,
    MdList,
    MdListItem,
    MdButton,
    MdIcon
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
