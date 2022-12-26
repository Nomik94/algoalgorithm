function solution(phone_number) {
  let answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}

phone_number = '01033334444';
console.log(solution(phone_number));
