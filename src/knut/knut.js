function prefixTable(pattern) {
  let prefix = new Array(pattern.length);
  prefix[0] = 0;
  let len = 0;
  let prefixIndex = 1;
  while (prefixIndex < pattern.length) {
    if (pattern[prefixIndex] === pattern[len]) {
      len++;
      prefix[prefixIndex] = len;
      prefixIndex++;
    } else {
      if (len !== 0) {
        len = prefix[len - 1];
      } else {
        prefix[prefixIndex] = 0;
        prefixIndex++;
      }
    }
  }
  return prefix;
}

function kmpSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;

  if (n === 0) return [];

  if (m === 0) return [];

  const prefix = prefixTable(pattern);

  let i = 0;
  let j = 0;

  const matches = [];

  while (i < n) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }
    if (j === m) {
      matches.push(i - j);
      j = prefix[j - 1];
    } else if (i < n && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = prefix[j - 1];
      } else {
        i++;
      }
    }
  }
  return matches;
}

module.exports = { kmpSearch };
