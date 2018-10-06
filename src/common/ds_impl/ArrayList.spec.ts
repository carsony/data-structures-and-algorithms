import ArrayList from './ArrayList';

describe('ArrayList', () => {
  it('should be instantiatable', () => {
    const x: ArrayList<number> = new ArrayList(1, 2, 3);
    expect(x).toBeInstanceOf(ArrayList);
  });
});
