# 🥚 What's in the egg? 

![image](https://github.com/samuel21695/subject4-backend-programming-basic/assets/141696122/db2ae92a-7e29-4ab5-8a19-2573ead2e959)

카운트가 올라갈 수록 알의 모습이 변화하는 간단한 클릭형 게임입니다!

숫자가 늘어날수록 어떤 변화가 나타날까요? 한번 시도해보세요!

A simple game that only require 'click' button itself!

Try now to see how it works and evolves.

Further progress will be updated soon.

--------------------------------------------------------------
# 파일 작성 순서
app.js
  1. 내부함수로 http를 호출하기 위해 const 사용
  2. fs도 이와 마찬가지로 내부함수로 호출한다.
  3. contentType를 변수로 생성하여 간편화한다.
  4. createServer를 사용하여 서버 생성하기
  5. Content-type은 text/html로 미리 변수 선언
  6. fs.readFile을 사용하여 외부에 있는 html파일을 호출하였다.
  7. server.listen을 통해 포트번호 8080으로 설정
  8. 웹 주소창에 localhost:8080 입력하여 접속한다.

index.html
  1. body라는 부모 태그에 자식 태그들을 마크다운 방식으로 작성한다.
  2. 정적으로 CSS를 작성해서 크기값, 색상 ,폰트 크기 등을 설정한다..
  3. @keyframes vibration을 통해 10degree씩 회전하게끔 하는 애니메이션을 설정 
  4. 적용할 class를 선택하여서 커스터마이징한 효과를 작성한다.
  5. script 작성 시, addEventListner를 통해 click시 event가 발생하는 코드 작성
  6. 동적으로 스타일이 바뀌게끔 DOM을 활용하여 작성

test for pull request
