export class Dive {
  public scoreList: number[];
  public countedScores: number[];
  public total: number;

  constructor(public num: number,
              public pos: string,
              public level: number,
              public dd: number) { 
    this.countedScores = ['-','-','-'];
  }

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

    this.countedScores = scores;

    var total = 0;
    for(var i = 0; i < scores.length; i++) {
      total += scores[i];
    }
    total *= this.dd;
    return parseFloat((Math.round((total * 1000)/10)/100).toFixed(2));
  }

  private sortNums(a, b) {
    return a-b;
  }
}