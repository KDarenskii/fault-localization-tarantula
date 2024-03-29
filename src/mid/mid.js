function mid(x, y, z) {
  let m = z;
  if (y < z) {
    if (x < y) {
      m = y;
    } else if (x < z) {
      m = y; // bug!
    }
  } else {
    if (x > y) {
      m = y;
    } else if (x > z) {
      m = x;
    }
  }
  return m;
}

module.exports = { mid }