//디바운스는 어떤 내용을 입력하다가 특정 시간 동안 대기하고 있으면 마지막에 입려된 내용을
//바탕으로 서버 요청을 하는 방법 ex) 연관검색어
//export 는 js를 실행하기 위해 잠시 없엣다가 추후에 추가
export function debounce(func, delay) {
  let inDebounce;

  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
      console.log("초기화됌");
    }

    inDebounce = setTimeout(() => func(...args), delay);
    console.log(delay);
    console.log("시간 다시 돈다");
  };
}
const run = debounce((val) => console.log(val), 100);

run("a");
run("b");
run(2);
