//------------------------------------------GRAPH DEPTH FIRST SEARCH TRAVERSAL---------------------------------------------------------
//using Recursion :: jump to line 49

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



  //DEPTH FIRST SEARCH TRAVERSAL - Recursion method
  DFS_Recursive(start){
    let visited= {},
    result=[],
    adjacencylist=this.adjacencylist;
    function recursionhelper(vertex){
      if(!adjacencylist[vertex]) return null;
      visited[vertex]=true;
      result.push(vertex);
      for(let i in adjacencylist[vertex])
        if(!visited[adjacencylist[vertex][i]])
          recursionhelper(adjacencylist[vertex][i])
      return result;
    }
    return recursionhelper(start);
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
graph.addedge('e', 'f');
graph.addedge('f', 'a');

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

graph.DFS_Recursive('a')

// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
