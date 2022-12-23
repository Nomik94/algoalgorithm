function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    const bin = (arr1[i] | arr2[i]).toString(2);
    console.log('bin:', bin);
    let line = [];
    for (let j = bin.length - n; j < bin.length; j++) {
      if (bin[j] === '1') {
        line.push('#');
      } else {
        line.push(' ');
      }
    }
    console.log('line:', line);
    answer.push(line.join(''));
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
