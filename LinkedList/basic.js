class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);
const e = new Node(10);
const f = new Node(2);

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

const sumList = (head, sum) => {
  //   let current = head;
  //   while (current !== null) {
  //     sum += current.val;
  //     current = current.next;
  //   }
  return addValues(head, sum);
};

const result = sumList(a, 0);
console.log(result);

function addValues(head, sum) {
  console.log(head, sum);
  if (head === null) return sum;
  let current = head;
  sum += current.val;
  return addValues(current.next, sum);
};