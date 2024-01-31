import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMasterPageComponent } from './main-master-page/main-master-page.component';
import { Section1Component } from './section1/section1.component';

const routes: Routes = [
  {
    path: 'app',
    component: MainMasterPageComponent,
    children: [
       {
         path: ':pageName/list',
         component: Section1Component
       }
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'app',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
