"use strict";
var Dive = (function () {
    function Dive(num, pos, level, dd) {
        this.num = num;
        this.pos = pos;
        this.level = level;
        this.dd = dd;
    }
    Dive.prototype.giveScore = function (scoreList) {
        this.scoreList = scoreList;
        this.total = this.filterScores();
    };
    Dive.prototype.filterScores = function () {
        var scores = this.scoreList.slice(0);
        scores.sort(this.sortNums);
        while (scores.length > 3) {
            scores.pop();
            scores.shift();
        }
        var total = 0;
        for (var i = 0; i < scores.length; i++) {
            total += scores[i];
        }
        return total;
    };
    Dive.prototype.sortNums = function (a, b) {
        return a - b;
    };
    return Dive;
}());
exports.Dive = Dive;
//# sourceMappingURL=dive.js.map