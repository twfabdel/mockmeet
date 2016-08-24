"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var new_diver_component_1 = require('./src/new-diver/new-diver.component');
var divers_component_1 = require('./src/divers/divers.component');
var dive_scoring_component_1 = require('./src/dive-scoring/dive-scoring.component');
var standings_component_1 = require('./src/standings/standings.component');
var navbar_component_1 = require('./src/navbar/navbar.component');
var home_component_1 = require('./src/home/home.component');
var meet_component_1 = require('./src/meet/meet.component');
var diver_service_1 = require('./src/divers/diver.service');
var dd_service_1 = require('./src/dd/dd.service');
var app_routing_1 = require('./src/routes/app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                new_diver_component_1.NewDiverComponent,
                divers_component_1.DiversComponent,
                dive_scoring_component_1.DiveScoringComponent,
                standings_component_1.StandingsComponent,
                home_component_1.HomeComponent,
                meet_component_1.MeetComponent,
                navbar_component_1.NavbarComponent
            ],
            providers: [
                diver_service_1.DiverService,
                dd_service_1.DdService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map