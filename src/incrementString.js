function incrementString(strng) {
  const num = parseInt(strng.replace(/[^\d.]/g, ""));
  return strng.replace(
    new RegExp(
      `${
        isNaN(num)
          ? ""
          : String(num)
              .split("")
              .every((n) => n == 9)
          ? `0?${num}`
          : num
      }$`
    ),
    (num || 0) + 1
  );
}
