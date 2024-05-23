import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { ProfessionalComponent } from 'src/app/components/professional/professional.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'professional',
      },
      {
        path: 'professional',
        component: ProfessionalComponent
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
