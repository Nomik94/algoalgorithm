function solution(quiz) {
  let answer = [];

  quiz.forEach((item) => {
    const oneQuiz = item.split(' ');

    const X = Number(oneQuiz[0]);
    const Y = Number(oneQuiz[2]);

    let exp = 0;

    if (oneQuiz[1] === '+') {
      exp = X + Y;
    }

    if (oneQuiz[1] === '-') {
      exp = X - Y;
    }

    const result = Number(oneQuiz[4]);

    if (exp === result) {
      answer.push('O');
    }

    if (exp !== result) {
      answer.push('X');
    }
  });

  return answer;
}
