import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ComponentsModule {
}
