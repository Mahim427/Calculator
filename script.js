const Calculator = {
    "+": (a, b) => (a + b).toFixed(2),
    "-": (a, b) => (a - b).toFixed(2),
    "*": (a, b) => (a * b).toFixed(2),
    "/": (a, b) => (a / b).toFixed(2),
}

function operate(equation_str) {
    const equation = equation_str.split(" ");
    const a = parseFloat(equation[0]);
    const op = equation[1];
    const b = parseFloat(equation[2]);

    console.log(Calculator[op](a, b));
}

// operate("2 + 4")
// operate("2.4 + 4.8")
// operate("2.4 - 4.8")
// operate("2.4 * 4.8")
// operate("2.4 / 4.8")