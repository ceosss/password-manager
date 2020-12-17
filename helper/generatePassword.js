const getCharset = (number, capital, symbol) => {
  let set = "abcdefghijklmnopqrstuvwxyz";
  if (number) set += "0123456789";
  if (capital) set += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (symbol) set += "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return set;
};

export const generatePassword = (length, number, capital, symbol) => {
  let charset = getCharset(number, capital, symbol);
  let password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
};
