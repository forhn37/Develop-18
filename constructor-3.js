class MakeObjectThree {
  constructor(idValue, passwordValue, emailValue) {
    this.id = idValue;
    this.passwordValue = passwordValue;
    this.emailValue = emailValue;
  }

}

let result = new MakeObjectThree("아이디테스트", "패스워드테스트", "이메일 테스트");

console.log(result)