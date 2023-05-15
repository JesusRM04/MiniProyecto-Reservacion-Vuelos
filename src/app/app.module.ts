import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ReservaComponent } from './reserva/reserva.component';
import { AcercavuelosComponent } from './acercavuelos/acercavuelos.component';
import { AcercaempresaComponent } from './acercaempresa/acercaempresa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import {MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DomseguroPipe } from './domseguro.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReservaComponent,
    AcercavuelosComponent,
    AcercaempresaComponent,
    FooterComponent,
    DomseguroPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatTooltipModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
