const screen = document.querySelector(".screen");
const inputBtn = document.querySelectorAll(".input-btn");

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


// Listen for each (number and operator) click
inputBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        screen.textContent += btn.textContent;
        screen.scrollLeft = screen.scrollWidth;
    });
})

