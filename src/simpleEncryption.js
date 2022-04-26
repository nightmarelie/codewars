function encrypt(text, n) {
  if (text === null) {
    return null;
  }
  let result = text;
  while (n--) {
    result = result
      .split("")
      .reduce(
        (acc, n, idx) => {
          acc[idx % 2 == 0 ? 1 : 0].push(n);

          return acc;
        },
        [[], []]
      )
      .reduce((l, r) => `${l.join("")}${r.join("")}`);
  }

  return result;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join("");
  }
  return encryptedText;
}
