import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservaComponent } from './reserva/reserva.component';
import { AcercavuelosComponent } from './acercavuelos/acercavuelos.component';
import { AcercaempresaComponent } from './acercaempresa/acercaempresa.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'reserva',component:ReservaComponent},
{path:'acercavuelos',component:AcercavuelosComponent},
{path:'acercaempresa',component:AcercaempresaComponent},
{path:'**',pathMatch:'full',redirectTo:'home'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
