app.js
  1. 내부함수로 http를 호출하기 위해 const 사용
  2. fs도 이와 마찬가지로 내부함수로 호출한다.
  3. contentType를 변수로 생성하여 간편화한다.
  4. createServer를 사용하여 서버 생성하기
  5. Content-type은 text/html로 미리 변수 선언
  6. fs.readFile을 사용하여 외부에 있는 html파일을 호출하였다.
  7. server.listen을 통해 포트번호 8080으로 설정
  8. 웹 주소창에 localhost:8080 입력하여 접속한다.

