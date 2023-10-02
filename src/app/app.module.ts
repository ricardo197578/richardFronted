import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
	  AppComponent, 
	  PersonaComponent
  ],
  imports: [
	  BrowserModule, 
	  HttpClientModule, 
	  RouterModule, 
	  AppRoutingModule
  	   ], // Agrega RouterModule y AppRoutingModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

