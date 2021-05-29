//-----------------------------------------------GRAPH---------------------------------------------------------


class Graph {
    //object to store the vertex and vertex edges/connection  
    constructor() {
        this.adjacencylist = {}
    }
    //addes the new vertex to the graph
    addvertex(vertex) {
        if (!this.adjacencylist[vertex])
            this.adjacencylist[vertex] = [];
    }
    //connectes the vertex to another vertex --edge connection 
    addedge(vertex1, vertex2) {
        if (vertex1 !== vertex2)
            this.adjacencylist[vertex1].push(vertex2);
            this.adjacencylist[vertex2].push(vertex1);
    }
    //disconnects the vertes from another vertex  --edge disconnection
    removeedge(vertex1,vertex2){
        for(let i in  this.adjacencylist[vertex1])
            if(this.adjacencylist[vertex1][i]===vertex2)
                this.adjacencylist[vertex1].splice(i,1);

        for(let i in  this.adjacencylist[vertex2])
            if(this.adjacencylist[vertex2][i]===vertex1)
                this.adjacencylist[vertex2].splice(i,1);
        return this
    }
    //removes the given vertex and its edges/connection to the other vertex
    removevertex(vertex){
        while(this.adjacencylist[vertex].length){
            let innervertex= this.adjacencylist[vertex].pop();
            this.removeedge(vertex,innervertex);
        }
        delete this.adjacencylist[vertex];
    }

}


let graph = new Graph;

graph.addvertex('1');
graph.addvertex('2');
graph.addvertex('3');
graph.addvertex('4');

/**
 * created the vertex/node
                1
                2
                4
                3

 */

graph.addedge('1', '2');
graph.addedge('2', '3');
graph.addedge('3', '4');
graph.addedge('4', '1');
graph.addedge('1', '3');

/**
 * connected the vertexs --edge connection 
                    1
                  / | \
                2   |   4   
                  \ | /
                    3

 */
graph.removeedge('1', '3');

/**
 * remove the connetion/edge between vertex
                    1
                  /   \
                2       4   
                  \   /
                    3

 */
graph.removevertex('1');

/**
 * removed  the 1 vertex and its edges/connection to the other vertex
 
                2       4   
                  \   /
                    3
 */
graph