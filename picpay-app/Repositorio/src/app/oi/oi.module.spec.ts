import { OiModule } from './oi.module';

describe('OiModule', () => {
  let oiModule: OiModule;

  beforeEach(() => {
    oiModule = new OiModule();
  });

  it('should create an instance', () => {
    expect(oiModule).toBeTruthy();
  });
});
