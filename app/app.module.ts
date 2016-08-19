import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { NewDiverComponent } from './src/new-diver/new-diver.component';
import { DiversComponent } from './src/divers/divers.component';
import { DiveScoringComponent } from './src/dive-scoring/dive-scoring.component';
import { StandingsComponent } from './src/standings/standings.component'

import { NavbarComponent } from './src/navbar/navbar.component';

import { HomeComponent } from './src/home/home.component';
import { MeetComponent } from './src/meet/meet.component';

import { DiverService } from './src/divers/diver.service';

import { routing } from './src/routes/app.routing'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
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
    DiverService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
