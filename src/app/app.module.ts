import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {MenuComponent} from './menu/menu.component';
import {PriceComponent} from './price/price.component';
import {TitleComponent} from './title/title.component';
import {WorkComponent} from './work/work.component';
import {TopComponent} from './top/top.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    MenuComponent,
    PriceComponent,
    TitleComponent,
    WorkComponent,
    TopComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
