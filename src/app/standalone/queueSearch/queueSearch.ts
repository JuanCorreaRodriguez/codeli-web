import {iSearchables} from "../../core/interfaces/const.interface";

export interface IQueueSearch {
  enqueue(i: iSearchables): void

  dispatch(i: iSearchables): void

  getAll(): iSearchables[]

  getLength(): number
}

class NodeSearch {
  link: iSearchables;
  next: NodeSearch | null = null;

  constructor(o: iSearchables) {
    this.link = o
  }
}

export class QueueSearch implements IQueueSearch {
  head: NodeSearch | null = null
  tail: NodeSearch | null = null
  length = 0;

  dispatch(): void {
    if (this.head == null) return

    let tmp = this.head;
    this.head = tmp.next
    tmp.next = null

    this.length--;
  }

  enqueue(i: iSearchables): void {
    let node = new NodeSearch(i);
    console.log(`ENQUEUE ${node.link.title}`)
    if (this.head == null) {
      this.head = node
    } else {
      let p = this.head
      while (p.next != null) {
        p = p.next
      }
      p.next = node
      this.tail = node

      console.log(`P ${p.next.link.title}`)
    }
    console.log(`HEAD ${this.head.link.title}`)
    this.length++;
  }

  getAll(): iSearchables[] {
    let array: iSearchables[] = []
    if (this.head == null) return []

    let p = this.head
    while (p.next != null) {
      array.push(p.link)

      p = p.next
    }
    console.log(`LIST ${array}`)
    return array;
  }

  getLength(): number {
    return length;
  }

}

