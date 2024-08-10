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
const printLinkedList = (head) => {
  //   while (head) {
  //     console.log(head.val);
  //     head = head.next;
  //   }
  let current = head;
  if (!current) return null;
  console.log("current", current.val);
  return printLinkedList(current.next);
};
printLinkedList(a);
