// Q1. Find all pairs of an integer array whose sum is equal to a given number:
function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
        pairs.push([arr[i], arr[j]]);
        }
    }
    }
    return pairs;
}

console.log("Q1. Find all pairs of an integer array whose sum is equal to a given number:") 
const array = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];
const target = 7;
console.log(findPairsWithSum(array, target));
  
// Q2. Reverse an array in place:
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
    }

    return arr;
}

console.log("Q2. Reverse an array in place:")
const arrayToReverse = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayToReverse));

// Q3. Check if two strings are a rotation of each other:
function areStringsRotations(str1, str2) {
    if (str1.length !== str2.length) {
    return false;
    }

    const combinedString = str1 + str1;
    return combinedString.includes(str2);
}

console.log("Q3. Check if two strings are a rotation of each other:")
const string1 = "abcd";
const string2 = "cdab";
console.log(areStringsRotations(string1, string2));

// Q4. Print the first non-repeated character from a string:
function firstNonRepeatedCharacter(str) {
    const charCount = {};

    for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str) {
    if (charCount[char] === 1) {
        return char;
    }
    }

    return null;
}

console.log("Q4. Print the first non-repeated character from a string:")
const string = "aabbcde";
console.log(firstNonRepeatedCharacter(string));

// Q5. Implement the Tower of Hanoi algorithm:
function towerOfHanoi(arr) {
    function moveSmallest(source, target, aux) {
    target.push(source.pop());
    }

    function moveLargestN(source, target, aux, n) {
    if (n === 1) {
        moveSmallest(source, target, aux);
    } else {
        moveLargestN(source, aux, target, n - 1);
        moveSmallest(source, target, aux);
        moveLargestN(aux, target, source, n - 1);
    }
    }

    const source = arr.slice();
    const target = []; 
    const aux = [];

    moveLargestN(source, target, aux, arr.length);

    return target;
}

const inputArray = [1, 8, 4, 6, 0, 3, 5, 2, 7, 9];
const sortedArray = towerOfHanoi(inputArray);

console.log("Q5. Implement the Tower of Hanoi algorithm:")
console.log("Original array:", inputArray);
console.log("Sorted array:", sortedArray);

// Q6. Convert postfix to prefix expression:
function isOperator(char) {
    const operators = "+-*/";
    return operators.includes(char);
}

function postfixToPrefix(postfixExpression) {
    const stack = [];

    for (const char of postfixExpression) {
    if (isOperator(char)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        stack.push(char + operand1 + operand2);
    } else {
        stack.push(char);
    }
    }

    return stack.pop();
}

console.log("Q6. Convert postfix to prefix expression:")
const postfixExp = "AB+CD-*";
console.log(postfixToPrefix(postfixExp));

// Q7. Convert prefix expression to infix expression:
function isOperator(char) {
    const operators = "+-*/";
    return operators.includes(char);
}

function prefixToInfix(prefixExpression) {
    const stack = [];

    for (let i = prefixExpression.length - 1; i >= 0; i--) {
    const char = prefixExpression[i];
    if (isOperator(char)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        stack.push(`(${operand1}${char}${operand2})`);
    } else {
        stack.push(char);
    }
    }

    return stack.pop();
}

console.log("Q7. Convert prefix expression to infix expression:")
const prefixExp = "*+AB-CD";
console.log(prefixToInfix(prefixExp));

// Q8. Check if all brackets are closed in a given code snippet:
function areBracketsClosed(codeSnippet) {
    const stack = [];

    for (const char of codeSnippet) {
    if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
        const top = stack.pop();
        if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
        ) {
        return false;
        }
    }
    }

    return stack.length === 0;
}

console.log("Q8. Check if all brackets are closed in a given code snippet:")
const code = "{ [ ( ) ] }";
console.log(areBracketsClosed(code));

// Q9. Reverse a stack:
class Stack {
    constructor() {
    this.items = [];
    }

    push(item) {
    this.items.push(item);
    }

    pop() {
    if (!this.isEmpty()) {
        return this.items.pop();
    }
    }

    isEmpty() {
    return this.items.length === 0;
    }
}

function reverseStack(stack) {
    const tempStack = new Stack();

    while (!stack.isEmpty()) {
    tempStack.push(stack.pop());
    }

    return tempStack;
}

console.log("Q9. Reverse a stack:")
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

const reversedStack = reverseStack(stack);
while (!reversedStack.isEmpty()) {
    console.log(reversedStack.pop());
}

// Q10. Find the smallest number using a stack:
function findSmallestNumber(stack) {
    if (stack.isEmpty()) {
    return null;
    }

    let smallest = stack.pop();
    while (!stack.isEmpty()) {
    const current = stack.pop();
    smallest = Math.min(smallest, current);
    }

    return smallest;
}

console.log("Q10. Find the smallest number using a stack:")
const numStack = new Stack();
numStack.push(5);
numStack.push(3);
numStack.push(7);
numStack.push(1);
console.log(findSmallestNumber(numStack));