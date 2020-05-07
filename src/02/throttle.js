//스로틀은 디바운스와 개념은 비슷하지만 '입력 되는 동안에도 바로 이전에
//요청한 작업을 주기적으로 실행한다는 점' 페이스,북의 무한 스크롤 기능

function throttle(func, delay) {
  let lastFunc;
  let lastRun;
  return function (...args) {
    const context = this;
    if (!lastRun) {
      func.call(context, ...args);
      lastRun = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRun >= delay) {
          func.call(context, ...args);
          lastRun = Date.now();
        }
      }, delay - (Date.now() - lastRun));
    }
  };
}

var checkPosition = () => {
  const offset = 500;
  const currentScrollPosition = window.pageXOffset;
  const pageBottomPosition =
    document.body.offsetHeight - window.innerHeight - offset;
  if (currentScrollPosition >= pageBottomPosition) {
    console.log("다음 페이지 로딩");
    //fetch('page/next');
  }
};
var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener("scroll", infiniteScroll);
