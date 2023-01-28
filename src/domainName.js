function domainName(url) {
  let domain = url.match(
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im
  )[1];
  return domain.split(".")[0];
}
