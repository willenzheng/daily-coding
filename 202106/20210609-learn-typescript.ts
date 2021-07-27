const user = {
  name: 'Hayes',
  id: 0,
}
// user.name = 1;

interface Fruit {
  name: string;
  id: number;
}
// const apple: Fruit = {
//   name: 1,
//   id: 0,
// }
// const banana: Fruit = {
//   fruitName: 'banana',
//   id: 1,
// }

class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

interface User {
  name: string;
  id: number;
}

const murphy: User = new UserAccount("Murphy", 1)

console.log(murphy)

var a:string= '1';
