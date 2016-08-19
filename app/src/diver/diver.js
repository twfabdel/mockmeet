"use strict";
var Diver = (function () {
    function Diver(name, sex, list) {
        this.name = name;
        this.sex = sex;
        this.list = list;
        this.total = 0;
    }
    Diver.prototype.addScore = function (score) {
        this.total += score;
    };
    return Diver;
}());
exports.Diver = Diver;
//# sourceMappingURL=diver.js.map