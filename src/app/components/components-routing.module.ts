import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {RulesComponent} from './rules/rules.component';
import {RanksComponent} from './ranks/ranks.component';
import {ServicesComponent} from './services/services.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'ranks', component: RanksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {
}
