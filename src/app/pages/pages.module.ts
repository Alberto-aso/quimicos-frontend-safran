import { NgModule } from '@angular/core';

//Modulos Importados
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

//Componentes Personalizados
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { QuimicosComponent } from './quimicos/quimicos.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { PagesComponent } from './pages.component';





@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    QuimicosComponent,
    BitacoraComponent,
    CatalogosComponent,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    QuimicosComponent,
    BitacoraComponent,
    CatalogosComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class PagesModule { }
