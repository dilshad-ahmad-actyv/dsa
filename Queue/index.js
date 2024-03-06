// linear queue vs circular queue
class Queue {
  front = -1;
  rear = -1;
  queue = Array(5);
  size = this.queue.length;
  enqueue(value) {
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
      this.queue[this.rear] = value;
    } else if (this.isFull()) {
      console.log(this.rear, this.size);
      console.log("Queue overflow!");
    } else {
      this.rear++;
      this.queue[this.rear] = value;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue underflow!");
    } else if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front++;
    }
  }
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
    } else {
      return this.queue[this.front];
    }
  }
  isFull() {
    if (this.rear === this.size - 1) {
      return true;
    } else {
      return false;
    }
  }
  isEmpty() {
    if (this.front === -1 && this.rear === -1) {
      return true;
    } else {
      return false;
    }
  }
  traverse() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
    } else {
      for (let i = this.front; i <= this.rear; i++) {
        console.log(this.queue[i]);
      }
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);