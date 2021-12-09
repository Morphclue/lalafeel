import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ComponentsRoutingModule} from './components-routing.module';
import {ServicesComponent} from './services/services.component';
import {RulesComponent} from './rules/rules.component';
import {RanksComponent} from './ranks/ranks.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    RulesComponent,
    RanksComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
  ],
})
export class ComponentsModule {
}
