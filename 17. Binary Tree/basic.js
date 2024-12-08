// Features
// 1. At most two children per node
// 2. exactly one root node
// 3. exactly one path b/w root node and any node
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//        a
//      /   \
//     b     c
//   /   \    \
// d      e    f

// Depth First Search - Iterative solution

// const depthFirstValues = (root) => {
//   if (!root) return [];
//   const stack = [root];
//   const result = [];

//   while (stack.length) {
//     const current = stack.pop();
//     result.push(current.val);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return result;
// };

// const output = depthFirstValues(a);
// console.log(output);

// const depthFirstValues = (root) => {
//   if (!root) return [];
//   const leftValues = depthFirstValues(root.left);
//   const rightValues = depthFirstValues(root.right);
//   return [root.val, ...leftValues, ...rightValues];
// };

// console.log(depthFirstValues(a));

// BreadthFristSearch

// const breadthFirstValues = (root)=>{
//   const values = [];
//   const queue = [root];

//   while (queue.length) {
//     const current = queue.shift();
//     values.push(current.val);

//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return values;
// }

// console.log(breadthFirstValues(a));

// const treeIncludes = (root, target) => {
//   if(!root) return false;
//   const queue = [root];

//   while(queue.length){
//     const current = queue.shift();
//     if(current.val === target)return true;

//     if(current.right) queue.push(current.right);
//     if(current.left) queue.push(current.left);
//   }
//   return false;
// };

// const output = treeIncludes(a, "Z");
// console.log(output)

// const treeIncludes = (root, target) => {
//   if(!root) return false;
//   if(root.val === target) return true;
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };

// const output = treeIncludes(a, "E");
// console.log(output)

// const treeSum = (root, sum) => {
//   if (!root) return sum;
//   const stack = [root];

//   while (stack.length) {
//     const current = stack.pop();
//     sum += current.val;

//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }
//   return sum;
// };

// const output = treeSum(a, 0);
// console.log(output);

// const treeSum = (root, sum) => {
//   if (!root) return 0;

//   return root.val + treeSum(root.left, sum) + treeSum(root.right, sum);
// };

// const output = treeSum(a, 0);
// console.log(output);

// const treeMinValue = (root, min) => {
//   if (!root) return null;
//   const queue = [root];

//   while (queue.length) {
//     const current = queue.shift();
//     if (current.val < min) min = current.val;

//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return min;
// };

// const output = treeMinValue(a, Infinity);
// console.log(output);

// const treeMinValue = (root, min) => {
//   if (!root) return min;
//   return Math.min(
//     root.val,
//     treeMinValue(root.left, min),
//     treeMinValue(root.right, min)
//   );
// };

// const output = treeMinValue(a, Infinity);
// console.log(output);

// const maxPathSum = (root) => {
//   if (!root) return -Infinity;
//   if (!root.left && !root.right) return root.val;
//   const maxChildVal = Math.max(maxPathSum(root.left), maxPathSum(root.right));
//   return root.val + maxChildVal;
// };

// const output = maxPathSum(a);
// console.log(output);

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
const g = new Node("G");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// Depth-first search
// A->B->D->E->C->F

// function depthFirstValues(head){
  //Iterative approach
//   const stack = [head];
//   const values = [];

//   while(stack.length > 0){
//     const currentNode = stack.pop();
//     values.push(currentNode.value);

//     if(currentNode.right) stack.push(currentNode.right)
//     if(currentNode.left)stack.push(currentNode.left)
//   }
// return values;

// Recursive approach
//  if(!head) return [];
//  const left = depthFirstValues(head.left);
//  const right = depthFirstValues(head.right);
//   return [head.value, ...left, ...right]
// }

// const result = depthFirstValues(a);
// console.log(result);

// Breadth-first search
// A->B->C->D->E->F

const breadthFirstValues = (head)=>{
  const values = [];
  const queue = [head];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    values.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return values;
}

const result = breadthFirstValues(a)
console.log(result)