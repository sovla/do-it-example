//콜백함수 지옥
//ES6 비동기 함수 표현법이 추가 되었습니다. Promise 클래스
//Promise 클래스 함수는 다음과 같이 구현됩니다.
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
class Promise {
  constructor(fn) {
    function resolve() {
      if (typeof this.onDone === "function") {
        this.onDone.apply(null, arguments);
      }
      if (typeof this.onComplete === "function") {
        this.onComplete();
      }
    }
    function reject() {
      if (typeof this.onError === "function") {
        this.onError.apply(null, arguments);
      }
      if (typeof this.onComplete === "function") {
        this.onComplete();
      }
    }
    fn(resolve.bind(this), reject.bind(this));
  }
  then(onDone, onError) {
    this.onDone = onDone;
    this.onError = onError;
    return this;
  }
  catch(onError) {
    this.onError = onError;
    return this;
  }
  finally(onComplete) {
    this.onComplete = onComplete;
    return this;
  }
}

//Promis 객체를 생성할때는 클래스의 resolve() 함수 또는 reject()
// 함수에 해당하는 콜백 함수를 직접 전달해야 됌
const work1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("작업1 완료"), 100);
  });
const work2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("작업2 완료"), 200);
  });

const work3 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("작업3 완료"), 300);
  });

function urgentWork() {
  console.log("긴급 작업");
}

const nextWorkOnDone = (msg1) => {
  console.log("done after 100ms:" + msg1);
  return work2();
};

work1()
  .then(nextWorkOnDone)
  .then((msg2) => {
    console.log("done after 200ms:" + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log("done after 300ms:" + msg3);
  });
urgentWork();

const work1and2 = () =>
  work1().then((msg1) => {
    console.log("done after 100ms:" + msg1);
    return work2();
  });

work1and2()
  .then((msg2) => {
    console.log("done after 200ms:" + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log("done after 300ms:" + msg3);
  });
