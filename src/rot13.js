function rot13(message) {
  return message.replace(/[a-zA-Z]/g, (c) =>
    String.fromCharCode(
      (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
    )
  );
}
