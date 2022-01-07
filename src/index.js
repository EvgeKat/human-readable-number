module.exports = function toReadable (number) {
  const num = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const numTy = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  
  if (number === 0)
    return "zero";

  for (i = 2; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      num[i * 10 + j] = numTy[i] + " " + num[j];
      num[i * 10 + j] = num[i * 10 + j].trim();
    }
  }

  for (h = 1; h < 10; h++) {
    for (i = 0; i < 100; i++) {
      num[h * 100 + i] = num[h] + " " + "hundred" + " " + num[i];
      num[h * 100 + i] = num[h * 100 + i].trim();
    }
  }

  return num[number];
}
