/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

var findWordsContaining = function (words, x) {
  let res = []

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) res.push(i)
  }

  // words.forEach((word, i) => {
  //   if (word.includes(x)) res.push(i)
  // });

  return res
  // return words.map((w, i) => w.includes(x) ? i : -1).filter(e => e != -1)
};
