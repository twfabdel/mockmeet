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
var DiversComponent = (function () {
    function DiversComponent(diverService) {
        this.diverService = diverService;
    }
    DiversComponent.prototype.ngOnInit = function () {
        this.divers = this.diverService.getDivers();
    };
    DiversComponent.prototype.deleteDiver = function (diver) {
        var i = this.divers.indexOf(diver);
        this.divers.splice(i, 1);
    };
    DiversComponent = __decorate([
        core_1.Component({
            selector: 'divers',
            templateUrl: './app/src/divers/divers.html',
            styleUrls: ['./app/src/divers/divers.css']
        }), 
        __metadata('design:paramtypes', [diver_service_1.DiverService])
    ], DiversComponent);
    return DiversComponent;
}());
exports.DiversComponent = DiversComponent;
//# sourceMappingURL=divers.component.js.map