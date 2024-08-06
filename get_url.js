const getUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const callbackUrl = new URL('musily://oauth_callback');
  params.forEach((value, key) => {
    callbackUrl.searchParams.append(key, value);
  });
  return callbackUrl.toString();
}