function makeObjectTwo(idValue, passwordValue, emailValue) {
  // 함수를 '선언문' 방식 , 기명함수 방식으로 바꾸었고, this 바인딩 능력을 활용해 제작했다. 
  this.id = idValue;
  this.password = passwordValue;
  this.email = emailValue;
};

// 함수를 호출할때 new 라는 키워드를 추가했다.
let result = new makeObjectTwo("아이디테스트", "패스워드테스트", "이메일 테스트");

// 결과적으로 변수 result는 객체이지만, '무엇인가 함수로부터 만들어진 ' '인스턴샤(instance)' 라고 명명한다. 
// 예제 1과 결과물은 같은 객체이기 떄문에 같아 보이지만, '인스턴스' 히니