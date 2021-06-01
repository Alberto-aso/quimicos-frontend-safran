import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { BitacoraComponent } from './bitacora/bitacora.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { QuimicosComponent } from './quimicos/quimicos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

//RUTAS importacion de los componentes


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'usuarios', component: UsuariosComponent },
            { path: 'quimicos', component: QuimicosComponent },
            { path: 'bitacora', component: BitacoraComponent },
            { path: 'catalogos', component: CatalogosComponent },
        ]
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }
