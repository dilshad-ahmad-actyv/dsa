class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// A --> B --> C --> D --> E --F ---> NULL
// head                       //tail
// const printLinkedList = (head) => {
//   //   while (head) {
//   //     console.log(head.val);
//   //     head = head.next;
//   //   }
//   let current = head;
//   if (!current) return null;
//   console.log("current", current.val);
//   return printLinkedList(current.next);
// };
// printLinkedList(a);

// const linkedListValues = (head, values) => {
//   //   const values = [];
//   //   let current = head;

//   //   while (current !== null) {
//   //     values.push(current.val);
//   //     current = current.next;
//   //   }
//   //   return values;

//   let current = head;
//   if (current === null) return null;
//   values.push(current.val);
//   linkedListValues(current.next, values);
//   return values;
// };
// const values = [];
// console.log(linkedListValues(a, values));

// const sumList = (head, sum) => {
//   //   let current = head;
//   //   while (current !== null) {
//   //     sum += current.val;
//   //     current = current.next;
//   //   }
//   return addValues(head, sum);
// };

// const result = sumList(a, 0);
// console.log(result);

// function addValues(head, sum) {
//   console.log(head, sum);
//   if (head === null) return sum;
//   let current = head;
//   sum += current.val;
//   return addValues(current.next, sum);
// };

// const linkedListFind = (head, target) => {
//   if (!head) return false;
//   let current = head;
//   while (current) {
//     if (current.val === target) return true;
//     current = current.next;
//   }
//   return false;
// };
// const target = 1;
// const result = linkedListFind(a, target);
// console.log(result);

// const linkedListFind = (head, target)=>{
//   if (!head) return false;
//   let current = head;
//   if (current.val === target) return true;
//   return linkedListFind(current.next, target);
// }

// const target = 1;
// const result = linkedListFind(a, target);
// console.log(result);

// const linkedListFindIndexValue = (head, index) => {
//   let cnt = 0;
//   let current = head;
//   while (current) {
//     if (cnt === index) return current.val;
//     current = current.next;
//     cnt++;
//   }
//   return -1;
// };

// const index = 40;
// const result = linkedListFindIndexValue(a, index);
// console.log(result);

// const linkedListFindIndexValue = (head, index) => {
//     if(!head) return -1;

//     let current = head;
//     if(index === 0) return current.val;
//     return linkedListFindIndexValue(current.next, index-1);
//   };

//   const index = 4;
//   const result = linkedListFindIndexValue(a, index);
//   console.log(result);

// const reverseLinkedList = (head)=>{
//   let prev = null;
//   let current = head;

//   while (current) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// }

// const result = reverseLinkedList(a);
// console.log(result)

const reverseLinkedList = (head) => {
  if (!head) return null;
  let prev = null;
  let current = head;
  return reverse(current, prev);
};

const result = reverseLinkedList(a);
console.log(result);

function reverse(head, prev) {
  if (!head) return prev;
  let current = head;
  let next = current.next;
  current.next = prev;
  prev = current;
  return reverse(next, prev);
}