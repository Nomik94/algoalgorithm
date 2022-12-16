function solution(keyinput, board) {
  let answer = [0, 0];
  const key = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };
  const wall = [board[0] / 2, board[1] / 2];
  keyinput.forEach((directory) => {
    if (
      Math.abs(answer[0] + key[directory][0]) <= wall[0] &&
      Math.abs(answer[1] + key[directory][1]) <= wall[1]
    ) {
      answer[0] += key[directory][0];
      answer[1] += key[directory][1];
    }
  });
  return answer;
}
