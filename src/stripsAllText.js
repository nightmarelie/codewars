function solution(input, markers) {
  return input
    .split("\n")
    .map((s) => {
      return markers
        .reduce((acc, m) => acc.replace(new RegExp(`\\${m}.*`), ""), s)
        .trim();
    })
    .join("\n");
}

function solution1(input, markers) {
  return input
    .split("\n")
    .map((line) =>
      markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
    )
    .join("\n");
}

function solution2(input, markers) {
  return input.replace(
    new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"),
    "$1"
  );
}
