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
var diver_service_1 = require('../divers/diver.service');
var toFloat_pipe_1 = require('../pipes/toFloat.pipe');
var DiveScoringComponent = (function () {
    function DiveScoringComponent(diverService) {
        this.diverService = diverService;
        this.fulls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.halfs = [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5];
        this.scores = [];
        this.round = 0;
        this.diverIndex = 0;
        this.submitted = false;
        this.running = true;
    }
    DiveScoringComponent.prototype.ngOnInit = function () {
        this.divers = this.diverService.getDivers();
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
        if (this.scores.length == 1) {
            this.scores.push(this.scores[0]);
            this.scores.push(this.scores[0]);
        }
        else if (this.scores.length == 2) {
            var mid = 0.5 * (this.scores[0] + this.scores[1]);
            this.scores.push(mid);
        }
        else if (this.scores.length % 2 == 0) {
            alert("Please enter an odd number of scores.");
            return;
        }
        this.dive.giveScore(this.scores);
    };
    DiveScoringComponent.prototype.next = function () {
        if (!this.submitted) {
            alert("Please enter scores or submit the score entered.");
            return;
        }
        this.diverIndex += 1;
        if (this.diverIndex == this.divers.length) {
            this.round += 1;
            this.diverIndex = 0;
        }
        this.scores = [];
        this.diverUp.addScore(this.dive.total);
        this.setDiver();
        this.submitted = false;
    };
    DiveScoringComponent.prototype.setDiver = function () {
        this.diverUp = this.divers[this.diverIndex];
        var temp = this.diverUp.list[this.round];
        if (!temp) {
            this.running = false;
            return;
        }
        this.dive = temp;
    };
    DiveScoringComponent = __decorate([
        core_1.Component({
            selector: 'dive-scoring',
            templateUrl: './app/src/dive-scoring/dive-scoring.html',
            styleUrls: ['./app/src/dive-scoring/dive-scoring.css'],
            pipes: [toFloat_pipe_1.ToFloatPipe]
        }), 
        __metadata('design:paramtypes', [diver_service_1.DiverService])
    ], DiveScoringComponent);
    return DiveScoringComponent;
}());
exports.DiveScoringComponent = DiveScoringComponent;
//# sourceMappingURL=dive-scoring.component.js.map