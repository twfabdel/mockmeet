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
var sort_pipe_1 = require('../pipes/sort.pipe');
var toFloat_pipe_1 = require('../pipes/toFloat.pipe');
var StandingsComponent = (function () {
    function StandingsComponent(diverService) {
        this.diverService = diverService;
    }
    StandingsComponent.prototype.ngOnInit = function () {
        this.divers = this.diverService.getDivers().slice();
    };
    StandingsComponent.prototype.scoreToString = function (score) {
        if (score == 0 || !score)
            return "0.00";
        var str = (Math.round(score * 100)).toString();
        return str.slice(0, str.length - 2) + "." + str.slice(-2);
    };
    StandingsComponent.prototype.showScores = function (diver) {
        var index = this.divers.indexOf(diver);
        var scoreElems = document.getElementsByClassName("scores" + index);
        var buttonElem = document.getElementById("btn" + index);
        var flip = false;
        for (var _i = 0, scoreElems_1 = scoreElems; _i < scoreElems_1.length; _i++) {
            var elem = scoreElems_1[_i];
            if (elem.style.display != "table-row") {
                elem.style.display = "table-row";
                flip = true;
            }
            else {
                elem.style.display = "none";
            }
        }
        if (flip) {
            buttonElem.setAttribute("class", "rotate");
        }
        else
            buttonElem.setAttribute("class", "");
    };
    StandingsComponent = __decorate([
        core_1.Component({
            selector: 'standings',
            templateUrl: './app/src/standings/standings.html',
            styleUrls: ['./app/src/standings/standings.css'],
            pipes: [sort_pipe_1.DiverSortPipe, toFloat_pipe_1.ToFloatPipe]
        }), 
        __metadata('design:paramtypes', [diver_service_1.DiverService])
    ], StandingsComponent);
    return StandingsComponent;
}());
exports.StandingsComponent = StandingsComponent;
//# sourceMappingURL=standings.component.js.map