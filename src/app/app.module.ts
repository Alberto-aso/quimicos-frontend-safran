import { NgModule } from '@angular/core';

//modulos
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Copmponentes
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { QuimicosComponent } from './pages/quimicos/quimicos.component';
import { BitacoraComponent } from './pages/bitacora/bitacora.component';
import { CatalogosComponent } from './pages/catalogos/catalogos.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    UsuariosComponent,
    QuimicosComponent,
    BitacoraComponent,
    CatalogosComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
