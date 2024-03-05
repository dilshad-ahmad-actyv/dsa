class StackOperation {
  index = -1;
  stack = Array(5);
  size = this.stack.length;
  //   constructor(value) {
  //     this.value = value;
  //   }

  push(value) {
    if (this.isFull()) {
      return "Stack OverFlow";
    } else {
      this.index++;
      this.stack[this.index] = value;
    }
  }

  pop() {
    if (this.index === -1) {
      return "Stack underflow";
    } else {
      this.index--;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty!";
    } else {
      return this.stack[this.index];
    }
  }

  isFull() {
    if (this.index === this.size - 1) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if (this.index === -1) {
      return true;
    } else {
      return false;
    }
  }

  traverse() {
    if (this.isEmpty()) {
      return "Stack is Empty!";
    } else {
      for (let i = this.index; i >= 0; i--) {
        const val = this.stack[i];
        console.log(val);
      }
    }
  }
}

function inputTaker(stack, choice = 0, value) {
  let result;

  switch (choice) {
    case 1:
      result = stack.push(value);
      break;
    case 2:
      result = stack.pop();
      break;
    case 3:
      result = stack.peek();
      break;
    case 4:
      result = stack.traverse();
      break;
    case 5:
      result = stack.isFull();
      break;
    case 6:
      result = stack.isEmpty();
      break;
    default:
      result = "OOPs!, Invalid Choice";
      break;
  }
  return result;
}
const stack = new StackOperation();
inputTaker(stack, 1, 10);
inputTaker(stack, 1, 20);
inputTaker(stack, 1, 30);
inputTaker(stack, 1, 60);
inputTaker(stack, 1, 100);
const push = inputTaker(stack, 1, 130);
inputTaker(stack, 1, 120);
// const top = inputTaker(stack, 3);
console.log(push);
inputTaker(stack, 4);
