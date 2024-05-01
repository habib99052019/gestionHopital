import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheeDmiComponent } from './recherchee-dmi/recherchee-dmi.component';
import { GestionDmiComponent } from './gestion-dmi/gestion-dmi.component';
import { DecisionsDmiComponent } from './decisions-dmi/decisions-dmi.component';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule} from '@angular/material/dialog';
import { MatRadioModule} from '@angular/material/radio';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DmiRoutingModule } from './dmi.routing';
import { ConsultationComponent } from './consultation/consultation.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    RechercheeDmiComponent,
    GestionDmiComponent,
    DecisionsDmiComponent,
    ConsultationComponent,
  ],
  imports: [
    CommonModule,

    MatTableModule,
    MatFormFieldModule,
    MatInputModule, 
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
    ReactiveFormsModule,
    AngularSplitModule ,
    TableModule,
    ButtonModule,
    MatSelectModule,
    DmiRoutingModule
  ]
})
export class DmiModule { }
