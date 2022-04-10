function solution(str, ending) {
  return !!str.match(
    new RegExp(`${ending.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}$`)
  );
}

function solution1(str, ending) {
  return str.endsWith(ending);
}
