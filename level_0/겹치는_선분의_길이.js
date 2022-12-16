// [[0,1],[2,5]]인 경우
// a = 0
// [x,y] = [0,1], [2,5]
// [0,1]일 대
// Math.min = 0이 되고 i = 1
// Math.max = 1
// [2,5]일 때
// Math.min = 2이 되고 i = 3
// Math.max = 5
// a[3] = a[3] ? a[3] + 1 : 1
// a[3]이 a[3]과 같다면 a[i] +1 그게 아니라면 1을 반환한다
// 그 값을 더하고 , a 에 그 값을 누적한다.
// a 를 리턴한다.

// lines.reduce(callback(accumulator, currentValue) => {for},{})
// TODO: 도은이한테 해설듣기
function solution(lines) {
  const visited = lines.reduce((a, [x, y]) => {
    for (let i = Math.min(x, y) + 1; i <= Math.max(x, y); i++)
      a[i] = a[i] ? a[i] + 1 : 1;
    return a;
  }, {});

  return Object.values(visited).filter((v) => v > 1).length;
}
