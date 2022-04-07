// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

function checkExam(array1, array2) {
  const res = array1.reduce((res, corr, idx) => {
    if (corr === array2[idx]) return res + 4;
    else if (array2[idx] == "") return res;
    else return res - 1;
  }, 0);

  return res > 0 ? res : 0;
}
