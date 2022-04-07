const testpassword = require("./testpassword")

test('should return true', () => {
    expect(testpassword('test')).toBe(false);
    expect(testpassword('testokayokay')).toBe(true);
  });