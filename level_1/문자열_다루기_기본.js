function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split('').every((n) => !isNaN(n)); // 모든 요소가 Number면 true 리턴
  } else {
    return false;
  }
}
