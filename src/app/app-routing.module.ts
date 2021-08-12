import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { HomeComponent } from './components/home/home.component';
import { OddsettingComponent } from './components/oddsetting/oddsetting.component';
import { SettingComponent } from './components/setting/setting.component';

const routes: Routes = [
  {path: '', component: HomeComponent }  ,
  {path: 'events', component: EventsComponent }  ,
  {path: 'featured', component: FeaturedComponent }  ,
  {path: 'oddsettings', component: OddsettingComponent }  ,
  {path: 'setting', component: SettingComponent }  ,
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
