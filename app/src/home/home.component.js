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
var router_1 = require('@angular/router');
var diver_service_1 = require('../divers/diver.service');
var HomeComponent = (function () {
    function HomeComponent(diverService, router) {
        this.diverService = diverService;
        this.router = router;
        this.title = 'Divers';
    }
    HomeComponent.prototype.startMeet = function () {
        if (this.diverService.getDivers().length == 0) {
            alert("Please enter one or more divers into this meet.");
        }
        else {
            this.router.navigate(['/meet']);
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './app/src/home/home.html',
            styleUrls: ['./app/src/home/home.css']
        }), 
        __metadata('design:paramtypes', [diver_service_1.DiverService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map