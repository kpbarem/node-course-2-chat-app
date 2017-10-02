const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(90);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('   ');
    expect(res).toBe(false);
  });

  it('should allow string with non-space characers', () => {
    var res = isRealString('  KEVIN    ');
    expect(res).toBe(true);
  });

});
