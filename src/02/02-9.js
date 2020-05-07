// 자주사용하는 .forEach() .map() .reduce 함수에 대해알아봅시다잉

//쿼르 스트링 'banana=10&apple=20&orange=30' 을 분리하여 객체 담아 반환하는 메소드
function parse(qs) {
  var queryString = qs.substr(1);
  var chunks = qs.split("&");
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split("=");
    var key = parts[0];
    var value = parts[1];
    result[key] = value;
  }
  const queryString = qs.substr(1);
  const chunks = queryString.split("&");

  let ES6Result = {};
  let result2 = {};

  chunks.forEach((chunk) => {
    const parts = chunk.split("=");
    const key = parts[0];
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    ES6Result[key] = value;

    const [key1, value1] = chunk.split("=");
    result2[key1] = value1;
  });
  // 불변변수를 사용할경우
  const MapResult = chunks.map((chunk) => {
    const [key, value] = chunk.split("=");
    return { key, value };
  });

  // map + reduce
  const ReduceResult = chunks
    .map((chunk) => {
      const [key, value] = chunk.split("=");
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
  return result;
}

function sum(numbers) {
  // reduce() 함수는 첫번째 인자에 변환함수를 두번째 인자에는 초기값을 전달합니다.
  // 그러면 reduce() 함수는 변환 함수 첫 인자 total 을 이전 결과값으로
  // 두 번째 인자 num을 각 요솟값 (1,2,3...) 으로 생각하며 순환 할당하면서 함수를 실행
  return numbers.reduce((total, num) => total + num, 0);
}

sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
