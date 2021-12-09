import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';

import {HomeComponent} from './home/home.component';
import {ComponentsRoutingModule} from './components-routing.module';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
  ],
})
export class ComponentsModule {
}
