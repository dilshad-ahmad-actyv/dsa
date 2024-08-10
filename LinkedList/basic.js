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



const linkedListFindIndexValue = (head, index) => {
    if(!head) return -1;

    let current = head;
    if(index === 0) return current.val;
    return linkedListFindIndexValue(current.next, index-1); 
  };
  
  const index = 4;
  const result = linkedListFindIndexValue(a, index);
  console.log(result);