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
var DiverService = (function () {
    function DiverService() {
        this.divers = [];
    }
    DiverService.prototype.getDivers = function () {
        this.divers.push(new diver_1.Diver("Diver1", "M", [
            new dive_1.Dive('103', 'B', 1),
            new dive_1.Dive('203', 'B', 1),
            new dive_1.Dive('303', 'B', 1),
            new dive_1.Dive('403', 'B', 1),
            new dive_1.Dive('5132', 'D', 1),
            new dive_1.Dive('5134', 'D', 1)
        ]));
        this.divers.push(new diver_1.Diver("Diver2", "F", [
            new dive_1.Dive('103', 'B', 1),
            new dive_1.Dive('203', 'B', 1),
            new dive_1.Dive('303', 'B', 1),
            new dive_1.Dive('403', 'B', 1),
            new dive_1.Dive('105', 'B', 1)
        ]));
        return this.divers;
    };
    DiverService.prototype.addDiver = function (diver) {
        this.divers.unshift(diver);
    };
    DiverService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DiverService);
    return DiverService;
}());
exports.DiverService = DiverService;
//# sourceMappingURL=diver.service.js.map