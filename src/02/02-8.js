<html>
  <head>
    <script1></script1>
    <script2></script2>
  </head>
</html>;
// 기존 방식에선 1번에 지정된 메소드나 변수를 script 2번에서도 사용 가능 했음
// 그러나 두개의 위치를 바꾸면 순서가 바뀌어 메소드,변수가 지정되지 않앗다고 에러가뜸.

//ES6의 경우 import 구문을 사용하여 script 엘리먼트 없이 연결된 파일 및 의존 파일을 먼저 모두 내려받고
// 코드를 구동하도록 변경
import { ModuleName } from "./MyModule.js";
function Func() {
  MyModule();
}

export const CONST_VALUE = 0;
export class MyClass {}
// 변수나 클래스의 이름을 다른 파일에서 따로 참조할수 있도록 정의
export default new Func();
//현재 파일이 다른 파일에서 기본으로 참조하게 되는 항목을 정의합니다.
