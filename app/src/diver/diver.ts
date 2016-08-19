import { Dive } from "./dive//dive"

export class Diver {
  public total = 0;

  constructor(
    public name: string,
    public sex: string,
    public list: Dive[]) { }

  addScore(score: number) {
    this.total += score;
  }
}