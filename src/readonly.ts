export {};

class VisaCard {
  constructor(public readonly owner: string) {
  }
}

let myVisaCard = new VisaCard("Pine");
console.log(myVisaCard.owner);