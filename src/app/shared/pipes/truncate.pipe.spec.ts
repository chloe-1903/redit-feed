import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('truncate small string', () => {
    const pipe = new TruncatePipe();
    const str = 'abc';
    expect(pipe.transform(str)).toBe(str);
  });

  it('truncate special char string', () => {
    const pipe = new TruncatePipe();
    const str = '.$ abc £+)]#°';
    expect(pipe.transform(str)).toBe(str);
  });

  it('truncate using limit', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform('abcdef', [5])).toBe('abcde...');
  });

  it('truncate long string', () => {
    const pipe = new TruncatePipe();
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const res = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...';
    expect(pipe.transform('str', [100])).toBe('str');
  });
});
