"use strict";
var Dive = (function () {
    function Dive(num, pos, level) {
        this.num = num;
        this.pos = pos;
        this.level = level;
    }
    Dive.prototype.giveScore = function (scores) {
        this.scoreList = scores;
        this.total = 0;
        for (var i = 0; i < scores.length; i++) {
            this.total += scores[i];
        }
    };
    return Dive;
}());
exports.Dive = Dive;
//# sourceMappingURL=dive.js.map