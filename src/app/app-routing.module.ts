import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'components', loadChildren: () => import('./components/components.module').then(p => p.ComponentsModule)},
  {path: '', pathMatch: 'full', redirectTo: 'components'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
