import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { NewDiverComponent } from './src/new-diver/new-diver.component';
import { DiversComponent } from './src/divers/divers.component';
import { HomeComponent } from './src/home/home.component';

import { DiverService } from './src/divers/diver.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewDiverComponent,
    DiversComponent,
    HomeComponent
  ],
  providers: [
    DiverService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
