import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { OddsettingComponent } from './components/oddsetting/oddsetting.component';
import { SettingComponent } from './components/setting/setting.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { SortPipe } from 'src/pipe/sort';
import { OddsValPipe } from 'src/pipe/oddsVal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    FeaturedComponent,
    OddsettingComponent,
    SettingComponent,
    SidebarComponent,
    NavbarComponent,
    SortPipe,OddsValPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OddsValPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
