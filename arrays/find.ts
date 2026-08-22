const users = [
    { name: "Aatish", age: 22 },
    { name: "John", age: 25 }
];

const user = users.find(user => user.name === "John");

console.log(user);