const screen = document.querySelector(".screen");
const inputBtn = document.querySelectorAll(".input-btn");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".del");
const revBtn = document.querySelector(".rev-n");

const Calculator = {
    "+": (a, b) => (a + b),
    "-": (a, b) => (a - b),
    "*": (a, b) => (a * b),
    "/": (a, b) => (a / b),
}

function operate(equation_str) {
    const equation = equation_str.split(" ");
    const a = equation[0].includes(".") ? parseFloat(equation[0]) : parseInt(equation[0]);
    const op = equation[1];
    const b = equation[2].includes(".") ? parseFloat(equation[2]) : parseInt(equation[2]);

    let ans = Calculator[op](a, b);
    if (`${ans}`.includes("."))
        return ans.toFixed(2);

    return ans;
}


// Listen for each (number and operator) click
inputBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        screen.textContent += btn.textContent;
        screen.scrollLeft = screen.scrollWidth;
    });
})


// Clear screen
clearBtn.addEventListener("click", () => {
    screen.textContent = "";
})


// Delete last character from screen
delBtn.addEventListener("click", () => {
    if (screen.textContent !== "") {
        const text = screen.textContent;
        screen.textContent = text.slice(0, text.length - 1);
    }
})


// Negate the number on the screen 1 <-> -1
revBtn.addEventListener("click", () => {
    if (screen.textContent !== "") {
        screen.textContent = (-1 * screen.textContent).toString();
    }
})
