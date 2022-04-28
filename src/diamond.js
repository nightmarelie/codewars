function diamond(n) {
  if (n < 0 || n % 2 == 0) {
    return null;
  }

  const center = Math.round(n / 2) - 1;

  const topStars = Array(center)
    .fill("*")
    .map((s, idx) => s.repeat(idx * 2 + 1).padStart(center + idx + 1));

  const centerStars = "*".repeat(n);

  const bottonStars = [...topStars].reverse();

  return [...topStars, centerStars, ...bottonStars].join("\n") + "\n";
}

function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  str = "";
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += " ".repeat(len);
    str += "*".repeat(n - 2 * len);
    str += "\n";
  }
  return str;
}

function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;

  return Array(n)
    .fill("*")
    .map((star, idx) => {
      const length = Math.abs((n - 2 * idx - 1) / 2);
      const starLen = n - 2 * length;
      return star.repeat(starLen).padStart(length + starLen) + "\n";
    })
    .join("");
}
