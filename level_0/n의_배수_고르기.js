function solution(n, numlist) {
  answer = numlist.filter((num) => num % n === 0);

  return answer;
}
