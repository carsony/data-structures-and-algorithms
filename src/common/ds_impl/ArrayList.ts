export default class ArrayList<x> {
  private readonly items: { [key: number]: x } = {};

  public constructor(...args: x[]) {
    args.forEach((item: x, index: number) => {
      this.items[index] = item;
    });
  }
}
