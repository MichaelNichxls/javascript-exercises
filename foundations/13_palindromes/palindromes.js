const palindromes = function (str) {
  const filtered = str
    .toLowerCase()
    .split("")
    .filter((char) => "abcdefghijklmnopqrstuvwxyz0123456789".includes(char))
    .join("");
  const reversed = filtered.split("").reverse().join("");
  return filtered === reversed;
};

// Do not edit below this line
module.exports = palindromes;
