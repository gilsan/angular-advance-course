import { ScotchModule } from './scotch.module';

describe('ScotchModule', () => {
  let scotchModule: ScotchModule;

  beforeEach(() => {
    scotchModule = new ScotchModule();
  });

  it('should create an instance', () => {
    expect(scotchModule).toBeTruthy();
  });
});
