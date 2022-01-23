import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ComponentsRoutingModule} from './components-routing.module';
import {ServicesComponent} from './services/services.component';
import {RulesComponent} from './rules/rules.component';
import {RanksComponent} from './ranks/ranks.component';
import {FooterComponent} from './footer/footer.component';
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    RulesComponent,
    RanksComponent,
    FooterComponent,
  ],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        NgbCollapseModule,
    ],
})
export class ComponentsModule {
}
