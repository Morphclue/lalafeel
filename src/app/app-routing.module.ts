import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'fc', loadChildren: () => import('./components/components.module').then(p => p.ComponentsModule)},
  {path: '', pathMatch: 'full', redirectTo: 'fc'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
