export class Dive {
  public scoreList: number[];
  public total: number;

  public dd: number;

  constructor(public num: number,
              public pos: string,
              public level: number) {}

  giveScore(scores: number[]) {
    this.scoreList = scores;
    this.total = 0;

    for(var i = 0; i < scores.length; i++) {
      this.total += scores[i];
    }
  }
}