// const depthFirstPrint = (graph, source) => {
//   const stack = [source];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);

//     for (let neighbour of graph[current]) {
//       stack.push(neighbour);
//     }
//   }
// };

// const depthFirstPrint = (graph, source) => {
//   console.log(source);

//   for (let neighbour of graph[source]) {
//     depthFirstPrint(graph, neighbour);
//   }
// };
// const graph = {
//   a: ["c", "b"],
//   b: ["d"],
//   c: ["e"],
//   d: ["f"],
//   e: [],
//   f: [],
// };

// depthFirstPrint(graph, "a");

// const breadthFirstPrint = (graph, source) => {
//   const queue = [source];

//   while (queue.length > 0) {
//     const current = queue.shift();
//     console.log(current);

//     for (let neighbour of graph[current]) {
//       queue.push(neighbour);
//     }
//   }
// };

// const graph = {
//   a: ["c", "b"],
//   b: ["d"],
//   c: ["e"],
//   d: ["f"],
//   e: [],
//   f: [],
// };

// breadthFirstPrint(graph, "a");


// Creating graph dynamically

// const graph = {};

// function addNode(node) {
//   if (!graph[node]) {
//     graph[node] = [];
//   }
// }

// function addEdge(node1, node2) {
//   if (!graph[node1]) {
//     addNode(node1);
//   }

//   if (!graph[node2]) {
//     addNode(node2);
//   }
//   graph[node1].push(node2);
// }

// addNode("a");
// addNode("b");
// addNode("c");
// addNode("d");
// addNode("e");
// addNode("f");

// addEdge("a", "c");
// addEdge("a", "b");
// addEdge("b", "d");
// addEdge("c", "e");
// addEdge("d", "f");

// console.log(graph)


// const hasPath = (graph, source, destination) => {
//   if (source === destination) return true;

//   for (let neighbour of graph[source]) {
//     if (hasPath(graph, neighbour, destination)) {
//       return true;
//     }
//   }
//   return false;
// };

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
// const output = hasPath(graph, "a", "e");
// console.log(output);

const hasPath = (graph, src, dst)=>{
    const queue = [src];

    while(queue.length){
        const current = queue.shift();
        if(current === dst) return true;

        for(let neighbour of graph[current]){
            queue.push(neighbour);
        }
    }
    return false;
}

const output = hasPath(graph, 'a', 'e');
console.log(output)