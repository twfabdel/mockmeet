import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NewDiverComponent } from './src/new-diver/new-diver.component';
import { DiversComponent } from './src/divers/divers.component';
import { DiveScoringComponent } from './src/dive-scoring/dive-scoring.component';
import { StandingsComponent } from './src/standings/standings.component'

import { NavbarComponent } from './src/navbar/navbar.component';

import { HomeComponent } from './src/home/home.component';
import { MeetComponent } from './src/meet/meet.component';

import { DiverService } from './src/divers/diver.service';
import { DdService } from './src/dd/dd.service';

import { routing } from './src/routes/app.routing'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    NewDiverComponent,
    DiversComponent,
    DiveScoringComponent,
    StandingsComponent,
    HomeComponent,
    MeetComponent,
    NavbarComponent
  ],
  providers: [
    DiverService,
    DdService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
