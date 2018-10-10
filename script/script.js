let user = {};
user.name = 'Vasiliy';
user.surname = 'Prohorov';
user.age = '25';
user.phones = {
    "7": "Russia",
    "38": "Ukraine",
    "1": "Usa"
};

user.name = 'Sergey';
delete user.surname;

console.log(user);
//copy
let student = {};
Object.keys(user).forEach(value => student[value] = user[value]);
console.log(student);

console.log(Object.assign(user));
console.log(JSON.parse(JSON.stringify(user)));

Object.defineProperty(user, "isHiddenTalent", {enumerable: false, value: 'hidden'});

Object.keys(user).forEach(value => console.log(value));
console.log(user);

user.bbf = 'bbf';
Object.defineProperty(user, 'country', {value: 'country'});
user.country = 'country2';
console.log(user);

user.valueOf = function () {
  return this.age * 2;
};

user.toString = function () {
  return this.name;
};

console.log(user.toString());
console.log(user * 2);