class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.adjacencyList[node1].push({ node: node2, weight: weight });
    this.adjacencyList[node2].push({ node: node1, weight: weight });
  }

  dijkstra(startNode) {
    const distances = {};
    const visited = {};
    const previous = {};
    const queue = new PriorityQueue();

    // Initialize distances, previous, and queue
    this.nodes.forEach((node) => {
      distances[node] = node === startNode ? 0 : Infinity;
      previous[node] = null;
      queue.enqueue(node, distances[node]);
    });

    while (!queue.isEmpty()) {
      const currentNode = queue.dequeue().data;
      visited[currentNode] = true;

      this.adjacencyList[currentNode].forEach((neighbor) => {
        if (!visited[neighbor.node]) {
          const newDistance = distances[currentNode] + neighbor.weight;
          if (newDistance < distances[neighbor.node]) {
            distances[neighbor.node] = newDistance;
            previous[neighbor.node] = currentNode;
            queue.enqueue(neighbor.node, newDistance);
          }
        }
      });
    }

    return { distances, previous };
  }

  shortestPath(startNode, endNode) {
    if (!this.nodes.includes(startNode) || !this.nodes.includes(endNode)) {
      return null;
    }

    const { previous } = this.dijkstra(startNode);
    const path = [];
    let currentNode = endNode;

    while (currentNode !== startNode) {
      path.unshift(currentNode);
      currentNode = previous[currentNode];
    }

    path.unshift(startNode);

    return path;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(data, priority) {
    const queueElement = { data, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(queueElement);
    }
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = { Graph };
