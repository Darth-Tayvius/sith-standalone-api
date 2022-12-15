import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SithStandaloneApiLibModule } from "sith-standalone-api-lib";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SithStandaloneApiLibModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
