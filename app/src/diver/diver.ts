import { Dive } from "./dive//dive"

export class Diver {
  constructor(
    public name: string,
    public sex: string,
    public list: Dive[]) { }
}