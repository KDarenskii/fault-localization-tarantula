const { Graph } = require("./deykstra");

describe("shortestPath", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();

    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addNode("D");
    graph.addNode("E");

    graph.addEdge("A", "B", 4);
    graph.addEdge("A", "C", 2);
    graph.addEdge("B", "E", 3);
    graph.addEdge("C", "D", 2);
    graph.addEdge("C", "E", 1);
    graph.addEdge("D", "E", 5);
  });

  test("shortestPath finds the shortest path between two nodes", () => {
    expect(graph.shortestPath("A", "E")).toEqual(["A", "C", "E"]);
  });

  test("shortestPath returns empty array if start and end nodes are the same", () => {
    expect(graph.shortestPath("A", "A")).toEqual(["A"]);
  });

  test("shortestPath returns null if start or end node is not in the graph", () => {
    expect(graph.shortestPath("A", "Z")).toBeNull();
    expect(graph.shortestPath("Z", "A")).toBeNull();
  });

  test("shortestPath returns correct path for disconnected nodes", () => {
    graph.addNode("F");
    graph.addEdge("E", "F", 2);

    expect(graph.shortestPath("A", "F")).toEqual(["A", "C", "E", "F"]);
  });

  test("shortestPath returns correct path when there are multiple shortest paths", () => {
    graph.addEdge("A", "D", 1);
    graph.addEdge("B", "D", 2);

    expect(graph.shortestPath("A", "D")).toEqual(["A", "D"]);
  });
});

describe("dijkstra", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();

    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addNode("D");
    graph.addNode("E");

    graph.addEdge("A", "B", 4);
    graph.addEdge("A", "C", 2);
    graph.addEdge("B", "E", 3);
    graph.addEdge("C", "D", 2);
    graph.addEdge("C", "E", 1);
    graph.addEdge("D", "E", 5);
  });

  test("dijkstra returns correct distances and previous nodes", () => {
    const { distances, previous } = graph.dijkstra("A");

    // Проверяем корректность расстояний до узлов
    expect(distances).toEqual({
      A: 0,
      B: 3,
      C: 2,
      D: 4,
      E: 3,
    });

    // Проверяем корректность предыдущих узлов на пути к каждому узлу
    expect(previous).toEqual({
      A: null,
      B: "C",
      C: "A",
      D: "C",
      E: "C",
    });
  });

  test("dijkstra returns correct distances and previous nodes for disconnected nodes", () => {
    graph.addNode("F");
    graph.addEdge("E", "F", 2);

    const { distances, previous } = graph.dijkstra("A");

    // Проверяем корректность расстояний до узлов, включая новый узел F
    expect(distances).toEqual({
      A: 0,
      B: 3,
      C: 2,
      D: 4,
      E: 3,
      F: Infinity,
    });

    // Проверяем корректность предыдущих узлов на пути к каждому узлу
    expect(previous).toEqual({
      A: null,
      B: "C",
      C: "A",
      D: "C",
      E: "C",
      F: null,
    });
  });
});
