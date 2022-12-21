function solution(dots) {
  let answer = 0;
  const parallel1 = (dots[0][0] - dots[1][0]) / (dots[0][1] - dots[1][1]);
  const parallel2 = (dots[2][0] - dots[3][0]) / (dots[2][1] - dots[3][1]);
  const parallel3 = (dots[1][0] - dots[3][0]) / (dots[1][1] - dots[3][1]);
  const parallel4 = (dots[0][0] - dots[2][0]) / (dots[0][1] - dots[2][1]);

  if (
    parallel1 === parallel2 ||
    parallel1 === parallel3 ||
    parallel1 === parallel4 ||
    parallel2 === parallel4 ||
    parallel3 === parallel4
  ) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);
