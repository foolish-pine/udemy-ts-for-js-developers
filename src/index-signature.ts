export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "Pine", underTwenty: false };

profile.age = 43;
profile.nationality = "Japan";
