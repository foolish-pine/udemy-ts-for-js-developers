export {};

type Mojiretsu = string;

const fooString: string = "Hello!";
const fooMojiretsu: Mojiretsu = "Hello!";

const example1 = {
  name: "Pine",
  age: 26,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: "Pine",
  age: 26,
};

// example1の構造が変化しても追従できる
type Profile2 = typeof example1;
