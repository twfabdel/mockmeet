export class Dive {
  public scoreList: number[];
  public total: number;

  public dd: number;

  constructor(public num: number,
              public pos: string,
              public level: number) {}

  giveScore(scoreList: number[]) {
    this.scoreList = scoreList;
    this.total = this.filterScores();
  }

  private filterScores() {
    var scores = this.scoreList.slice(0);
    scores.sort(this.sortNums);
    
    while(scores.length > 3) {
      scores.pop();
      scores.shift();
    }

    var total = 0;
    for(var i = 0; i < scores.length; i++) {
      total += scores[i];
    }
    return total;
  }

  private sortNums(a, b) {
    return a-b;
  }
}