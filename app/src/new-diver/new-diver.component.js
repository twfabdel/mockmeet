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
var dd_service_1 = require('../dd/dd.service');
var NewDiverComponent = (function () {
    function NewDiverComponent(diverService, ddService) {
        this.diverService = diverService;
        this.ddService = ddService;
        this.divers = [];
    }
    NewDiverComponent.prototype.ngOnInit = function () {
        this.sex = 'F';
        this.setPosition();
        this.setLevel();
    };
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
        this.diverService.addDiver(new diver_1.Diver(this.diverName, this.sex, dives));
        this.resetForm();
    };
    NewDiverComponent.prototype.resetForm = function () {
        this.diverName = '';
        //TODO: consolidate into loop?
        this.dive0 = '';
        this.dive1 = '';
        this.dive2 = '';
        this.dive3 = '';
        this.dive4 = '';
        this.dive5 = '';
        this.setPosition();
        this.setLevel();
    };
    NewDiverComponent.prototype.setPosition = function () {
        this.pos0 = 'A';
        this.pos1 = 'A';
        this.pos2 = 'A';
        this.pos3 = 'A';
        this.pos4 = 'A';
        this.pos5 = 'A';
    };
    NewDiverComponent.prototype.setLevel = function () {
        this.level0 = '1';
        this.level1 = '1';
        this.level2 = '1';
        this.level3 = '1';
        this.level4 = '1';
        this.level5 = '1';
    };
    NewDiverComponent = __decorate([
        core_1.Component({
            selector: 'new-diver',
            templateUrl: './app/src/new-diver/new-diver.html',
            styleUrls: ['./app/src/new-diver/new-diver.css']
        }), 
        __metadata('design:paramtypes', [diver_service_1.DiverService, dd_service_1.DdService])
    ], NewDiverComponent);
    return NewDiverComponent;
}());
exports.NewDiverComponent = NewDiverComponent;
//# sourceMappingURL=new-diver.component.js.map