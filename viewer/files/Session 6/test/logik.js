export { add };
function add(x, y) {
  if (x < 0) {
    return -x + y;
  }
  return x + y;
}
