const customers: {
    name: string;
    age: number;
}[] = [
    { name: "Aatish", age: 22 },
    { name: "John", age: 25 }
];

console.log(customers[0]?.name);