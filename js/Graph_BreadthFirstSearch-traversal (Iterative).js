//------------------------------------------GRAPH BREADTH FIRST SEARCH TRAVERSAL---------------------------------------------------------
//using Iteration  :: jump to line 48


class Graph {
  //object to store the vertex and vertex edges/connection  
  constructor() {
    this.adjacencylist = {}
  }
  //addes the new vertex to the graph
  addvertex(vertex) {
    if (!this.adjacencylist[vertex]) this.adjacencylist[vertex] = [];
  }
  //connectes the vertex to another vertex --edge connection 
  addedge(vertex1, vertex2) {
    let add = true;
    if (vertex1 !== vertex2) {
      for (let i in this.adjacencylist[vertex1])
        if (this.adjacencylist[vertex1][i] === vertex2)
          add = false
      if (add) {
        this.adjacencylist[vertex1].push(vertex2);
        this.adjacencylist[vertex2].push(vertex1);
      }
    }
  }
  //disconnects the vertes from another vertex  --edge disconnection
  removeedge(vertex1, vertex2) {
    for (let i in this.adjacencylist[vertex1])
      if (this.adjacencylist[vertex1][i] === vertex2)
        this.adjacencylist[vertex1].splice(i, 1);

    for (let i in this.adjacencylist[vertex2])
      if (this.adjacencylist[vertex2][i] === vertex1)
        this.adjacencylist[vertex2].splice(i, 1);
    return this
  }
  //removes the given vertex and its edges/connection to the other vertex
  removevertex(vertex) {
    while (this.adjacencylist[vertex].length) {
      let innervertex = this.adjacencylist[vertex].pop();
      this.removeedge(vertex, innervertex);
    }
    delete this.adjacencylist[vertex];
  }



  //BREADTH FIRST SEARCH TRAVERSAL - Iterative method
  BFS_Iterative(start) {
    //queue method --- FIFO  (or) LILO
    let queue = [start],
      result = [start],
      visited = {};
    visited[start] = true;

    if(!this.adjacencylist[start]) return null
    
    while (queue.length) {
      this.adjacencylist[queue.shift()].forEach(vertex => {
    
        if (!visited[vertex]) {
          visited[vertex] = true;
          queue.push(vertex)
          result.push(vertex)}
    
      });
    }
    return result
  }
}


let graph = new Graph;

graph.addvertex('a');
graph.addvertex('b');
graph.addvertex('c');
graph.addvertex('d');
graph.addvertex('e');
graph.addvertex('f');

/**
 * created the vertex/node
                a
                b
                c
                d
                e
                f

 */

graph.addedge('a', 'b');
graph.addedge('b', 'c');
graph.addedge('c', 'd');
graph.addedge('d', 'e');
graph.addedge('c', 'd');
graph.addedge('f', 'd');
graph.addedge('f', 'c');
graph.addedge('e', 'a');

/**
 * connected the vertexs --edge connection 
                    a
                  /   \
                b       e
                |       |
                c ----- d
                 \     /
                    f 

 */

graph.BFS_Iterative('a');

// [ 'a', 'b', 'e', 'c', 'd', 'f' ]
