import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

//Componentes Auth
import { LoginComponent } from './login/login.component';



//RUTAS importacion de los componentes


const routes: Routes = [
    { path: 'login', component: LoginComponent },
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
export class AuthRoutingModule { }
