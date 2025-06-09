const nums = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".op");
const screen = document.querySelector(".screen");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".del");
const revBtn = document.querySelector(".rev-n");
const equalBtn = document.querySelector(".equal");


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

// Check if last input is operator
const endsWithOperator = () => screen.textContent.slice(-1) === " ";
// Delete operator from equation
const deleteOperator = () => screen.textContent = screen.textContent.slice(0, -3);


// Listen for each number click
nums.forEach(num => {
    num.addEventListener("click", () => {
        screen.textContent += num.textContent;
    });
});


// Listen for each operator click
ops.forEach(op => {
    op.addEventListener("click", () => {
        // Check and Delete last operator
        if (endsWithOperator()) deleteOperator();

        if (screen.textContent.includes(" "))
            screen.textContent = operate(screen.textContent);

        screen.textContent += ` ${op.textContent} `;
    });
});


// Clear screen
clearBtn.addEventListener("click", () => {
    screen.textContent = "";
})


// Delete last character from screen
delBtn.addEventListener("click", () => {
    if (screen.textContent !== "") {
        const text = screen.textContent;

        // Check for operator
        if (endsWithOperator()) {
            deleteOperator();
        } else {
            screen.textContent = text.slice(0, text.length - 1);
        }
    }
})


// Negate the number on the screen 1 <-> -1
revBtn.addEventListener("click", () => {
    // Don't negate the operation -> 5 + 3 -> not negatable
    if (screen.textContent !== "" && !screen.textContent.includes(" ")) {
        screen.textContent = (-1 * screen.textContent).toString();
    }
})

// Calculate the equation
equalBtn.addEventListener("click", () => {
    screen.textContent = operate(screen.textContent);
})