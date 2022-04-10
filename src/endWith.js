function solution(str, ending) {
  return Boolean(str.match(new RegExp(`${ending}$`)));
}
