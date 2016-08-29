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
        this.mockDivers();
        return this.divers;
    };
    DiverService.prototype.mockDivers = function () {
        this.divers = [new diver_1.Diver("Tarek", "M", [new dive_1.Dive(101, "B", 1, 1.0),
                new dive_1.Dive(101, "B", 1, 1.0),
                new dive_1.Dive(101, "B", 1, 1.0),
                new dive_1.Dive(101, "B", 1, 1.0),
                new dive_1.Dive(101, "B", 1, 1.0),
                new dive_1.Dive(101, "B", 1, 1.0)
            ]),
            new diver_1.Diver("Ziyad", "M", [new dive_1.Dive(101, "B", 1, 1.0),
                new dive_1.Dive(101, "B", 1, 1.0),
                new dive_1.Dive(101, "B", 1, 1.0),
                new dive_1.Dive(101, "B", 1, 1.0),
                new dive_1.Dive(101, "B", 1, 1.0),
                new dive_1.Dive(101, "B", 1, 1.0)
            ]),
        ];
    };
    DiverService.prototype.addDiver = function (diver) {
        if (diver.sex == 'M') {
            this.divers.unshift(diver);
        }
        else
            this.divers.push(diver);
    };
    DiverService.prototype.deleteDiver = function (diver) {
        var i = this.divers.indexOf(diver);
        this.divers.splice(i, 1);
    };
    DiverService.prototype.restartMeet = function () {
        for (var _i = 0, _a = this.divers; _i < _a.length; _i++) {
            var diver = _a[_i];
            diver.total = 0;
            for (var _b = 0, _c = diver.list; _b < _c.length; _b++) {
                var dive = _c[_b];
                dive.scoreList = [];
                dive.total = '';
            }
        }
    };
    DiverService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DiverService);
    return DiverService;
}());
exports.DiverService = DiverService;
//# sourceMappingURL=diver.service.js.map