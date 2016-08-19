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
var DiveScoringComponent = (function () {
    function DiveScoringComponent(diverService) {
        this.diverService = diverService;
        this.fulls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.halfs = [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5];
        this.scores = [];
        this.round = 0;
        this.diverIndex = 0;
        this.submitted = false;
    }
    DiveScoringComponent.prototype.ngOnInit = function () {
        this.divers = this.diverService.getDivers();
        this.divers.push(new diver_1.Diver("Diver1", "M", [
            new dive_1.Dive('103', 'B', 1),
            new dive_1.Dive('203', 'B', 1),
            new dive_1.Dive('303', 'B', 1),
            new dive_1.Dive('403', 'B', 1),
            new dive_1.Dive('5132', 'D', 1),
            new dive_1.Dive('5134', 'D', 1)
        ]));
        this.divers.push(new diver_1.Diver("Diver2", "M", [
            new dive_1.Dive('103', 'B', 1),
            new dive_1.Dive('203', 'B', 1),
            new dive_1.Dive('303', 'B', 1),
            new dive_1.Dive('403', 'B', 1),
            new dive_1.Dive('5132', 'D', 1),
            new dive_1.Dive('5134', 'D', 1)
        ]));
        this.setDiver();
    };
    DiveScoringComponent.prototype.addScore = function (score) {
        if (this.submitted) {
            this.submitted = false;
            this.scores = [];
        }
        this.scores.push(score);
    };
    DiveScoringComponent.prototype.submit = function () {
        this.submitted = true;
        if (this.scores.length % 2 == 0) {
            alert("Please enter an odd number of scores");
            return;
        }
        this.dive.giveScore(this.scores);
        this.diverIndex += 1;
        if (this.diverIndex == this.divers.length) {
            this.round += 1;
            this.diverIndex = 0;
        }
    };
    DiveScoringComponent.prototype.next = function () {
        this.scores = [];
        this.diverUp.addScore(this.dive.total);
        this.setDiver();
    };
    DiveScoringComponent.prototype.setDiver = function () {
        this.diverUp = this.divers[this.diverIndex];
        this.dive = this.diverUp.list[this.round];
    };
    DiveScoringComponent = __decorate([
        core_1.Component({
            selector: 'dive-scoring',
            templateUrl: './app/src/dive-scoring/dive-scoring.html',
            styleUrls: ['./app/src/dive-scoring/dive-scoring.css']
        }), 
        __metadata('design:paramtypes', [diver_service_1.DiverService])
    ], DiveScoringComponent);
    return DiveScoringComponent;
}());
exports.DiveScoringComponent = DiveScoringComponent;
//# sourceMappingURL=dive-scoring.component.js.map