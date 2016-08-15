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
var diver_1 = require('../diver/diver');
var dive_1 = require('../dive/dive');
var diver_service_1 = require('../divers/diver.service');
var NewDiverComponent = (function () {
    function NewDiverComponent(diverService) {
        this.diverService = diverService;
        this.divers = [];
    }
    NewDiverComponent.prototype.newDiver = function () {
        var dives = [];
        dives.push(new dive_1.Dive(this.dive0, this.pos0, this.level0));
        dives.push(new dive_1.Dive(this.dive1, this.pos1, this.level1));
        dives.push(new dive_1.Dive(this.dive2, this.pos2, this.level2));
        dives.push(new dive_1.Dive(this.dive3, this.pos3, this.level3));
        dives.push(new dive_1.Dive(this.dive4, this.pos4, this.level4));
        if (this.sex == "M") {
            dives.push(new dive_1.Dive(this.dive5, this.pos5, this.level5));
        }
        this.divers.push(new diver_1.Diver(this.diverName, this.sex, dives));
        this.diverService.addDiver(new diver_1.Diver(this.diverName, this.sex, dives));
    };
    NewDiverComponent = __decorate([
        core_1.Component({
            selector: 'new-diver',
            templateUrl: './app/src/new-diver/new-diver.html',
            styleUrls: ['./app/src/new-diver/new-diver.css']
        }), 
        __metadata('design:paramtypes', [diver_service_1.DiverService])
    ], NewDiverComponent);
    return NewDiverComponent;
}());
exports.NewDiverComponent = NewDiverComponent;
//# sourceMappingURL=new-diver.component.js.map