import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RechercheeDmiComponent } from './recherchee-dmi/recherchee-dmi.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ConsultationsListComponent } from './consultations-list/consultations-list.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdmissionsListComponent } from './admissions-list/admissions-list.component';


const routes: Routes = [
  { path: 'liste-dmi', component: RechercheeDmiComponent },
  { path: 'ajouter-consultation', component: ConsultationComponent },
  { path: 'consultations/:ipp', component: ConsultationsListComponent },
  { path: 'ajouter-admission', component: AdmissionComponent },
  { path: 'admissions/:ipp', component: AdmissionsListComponent },

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