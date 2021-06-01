import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

//RUTAS importacion de los componentes
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { QuimicosComponent } from './pages/quimicos/quimicos.component';
import { BitacoraComponent } from './pages/bitacora/bitacora.component';
import { CatalogosComponent } from './pages/catalogos/catalogos.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'quimicos', component: QuimicosComponent },
      { path: 'bitacora', component: BitacoraComponent },
      { path: 'catalogos', component: CatalogosComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
