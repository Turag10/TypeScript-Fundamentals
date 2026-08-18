// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(50, 50));

function welcome(name: string = "Guest"): void {
    console.log(`Welcome ${name}`);
}

welcome();
welcome("Aatish");