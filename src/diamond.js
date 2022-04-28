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
