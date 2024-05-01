import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RechercheeDmiComponent } from './recherchee-dmi/recherchee-dmi.component';
import { ConsultationComponent } from './consultation/consultation.component';


const routes: Routes = [
  { path: 'liste-dmi', component: RechercheeDmiComponent },
  { path: 'consultation', component: ConsultationComponent },

];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class DmiRoutingModule { }