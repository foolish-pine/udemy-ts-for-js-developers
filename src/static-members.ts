export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Taro";
  static lastName: string = "Yamada";

  static work() {
    return `Hey Guys! This is ${this.firstName} Are you interested in TypeScript? Let'S dive into TS!`;
  }
}

console.log(Me.isProgrammer);
console.log(Me.work());
