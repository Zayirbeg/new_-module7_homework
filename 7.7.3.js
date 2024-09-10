const users = [
  {name: "Иван", age : 10},
  {name: "Мария", age : 22},
  {name: "Александр", age : 60},
  {name: "Виталий", age : 14},
  {name: "Анна", age : 45}
];
const usersOver18 = users.filter (users => users.age >= 18);
const namesOfUsersOver18 = usersOver18.map (users => users.name)

console.log ('Имена пользователей старше 18: ' + namesOfUsersOver18)