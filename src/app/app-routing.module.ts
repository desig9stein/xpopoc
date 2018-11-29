import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadsComponent } from './loads.component';

export const routes: Routes = [
   { path: '', component: LoadsComponent, pathMatch: 'full' },
  // { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  // { path: 'error', component: UncaughtErrorComponent },
  // { path: 'loads', component: LoadsComponent, data: { text: 'Loads' } },
  // { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
