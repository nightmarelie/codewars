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

function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, "$1") + text.replace(/(.)./g, "$1");
  }
  return text;
}

function decrypt(text, n) {
  let l = text && (text.length / 2) | 0;
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ""));
  }
  return text;
}
