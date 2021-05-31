//------------------------------------------DIJKSTRAS ALGORITHM---------------------------------------------------------


class Node{
    constructor(value,priority){
        this.value=value;
        this.priority=priority;
    }
}
class Priorityheap{
    constructor(){
        this.prioritylist=[];
    }
    bubbleup(){
        let child= this.prioritylist.length-1,
        parent = Math.floor((child-1)/2);
        if (this.prioritylist[parent] === undefined) return this.prioritylist;
        while(this.prioritylist[child]["priority"]<this.prioritylist[parent]["priority"]) {
            [this.prioritylist[child],this.prioritylist[parent]]=[this.prioritylist[parent],this.prioritylist[child]]
            child= parent;
            parent=  Math.floor((child-1)/2);
            if (this.prioritylist[parent] === undefined) return this.prioritylist;
        }
    }
    enqueue(val,priority){
        let newnode = new Node(val,priority)
        for (let i in this.prioritylist) { 
            if ( val=== this.prioritylist[i]['value'] && priority=== this.prioritylist[i]['priority'] ) {
                 return this.prioritylist
            }
        }
        this.prioritylist.push(newnode);
        this.bubbleup();
        return this.prioritylist;
    }
   
    dequeue(rootindex=0) {
        let min,
            currentroot = this.prioritylist[rootindex]
            ,lenght=this.prioritylist.length;

        [this.prioritylist[rootindex], this.prioritylist[this.prioritylist.length - 1]] = [this.prioritylist[this.prioritylist.length - 1], this.prioritylist[rootindex]];
        this.prioritylist.pop();

        let leftchild = (0 * 1) + 1,
            rightchild = (0 * 1) + 2;

        if (!lenght) return null;
        if (this.prioritylist[leftchild] === undefined || this.prioritylist[rightchild] === undefined) return currentroot;

        while (rightchild < this.prioritylist.length - 1 && leftchild < this.prioritylist.length - 1 ) {
            min = leftchild < this.prioritylist.length - 1 && leftchild < this.prioritylist.length - 1 ? this.prioritylist[leftchild].priority < this.prioritylist[rightchild].priority ? leftchild : rightchild : leftchild;
            [this.prioritylist[rootindex], this.prioritylist[min]] = [this.prioritylist[min], this.prioritylist[rootindex]];
            rootindex = min;
            leftchild = (min * 2) + 1;
            rightchild = (min * 2) + 2;
            if (this.prioritylist[leftchild] === undefined || this.prioritylist[rootindex] === undefined) return currentroot;
        }
        return currentroot;
    }

}

 



//weighted graph
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
    addedge(vertex1, vertex2,weight) {
      let add = true;
      if (vertex1 !== vertex2) {
        for (let i in this.adjacencylist[vertex1]){
            if (this.adjacencylist[vertex1][i]['vertex'] === vertex2)
                add = false
        }
        if (add) {
          this.adjacencylist[vertex1].push({'vertex':vertex2, weight});
          this.adjacencylist[vertex2].push({'vertex':vertex1, weight});
        }
      }
    }
    
    Dijkstras_algorithm(start,end){

        let distance = {},
            previous={},
            priorityheap = new Priorityheap,
            smallestpriority ,
            candidate,
            shortpath=[],
            visited=[];    


        for(let i in this.adjacencylist){
            if(i===start)distance[i]=0;
            else distance[i]=Infinity;
            previous[i]=null;
            priorityheap.enqueue(i,distance[i])
        }
        
        while(priorityheap.prioritylist.length){

            smallestpriority = priorityheap.dequeue().value;

            if(!visited.includes(smallestpriority)){
                if(smallestpriority === end){
                    //we found the given end vertex
                    while(previous[smallestpriority]){
                        shortpath.push(smallestpriority)
                        smallestpriority=previous[smallestpriority]
                    }
                    break;
                }

                if(smallestpriority ){
                    for(let i in this.adjacencylist[smallestpriority]){
    
                        let  neighbor = this.adjacencylist[smallestpriority][i];
    
                        candidate = distance[smallestpriority] + neighbor.weight
                                            
                        let nextneighbor = neighbor.vertex;
    
                        if(candidate < distance[nextneighbor]){
                            distance[nextneighbor]=candidate;
                            previous[nextneighbor]=smallestpriority;
                            priorityheap.enqueue(nextneighbor,candidate);
                        }
    
                    }             
                } 
                visited.push(smallestpriority);
            }
        }
        return shortpath.concat(start).reverse();
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
   *    a
             b
                  c
         d      e
             f
  
   */
  
  graph.addedge('a', 'b',4);
  graph.addedge('a', 'c',2);
  graph.addedge('c', 'd',2);
  graph.addedge('c', 'f',4);
  graph.addedge('f', 'e',1);
  graph.addedge('d', 'f',1);
  graph.addedge('e', 'd',3);
  graph.addedge('e', 'b',3);
  
  /**
   * connected the vertexs --edge connection 
                      a
                    /   \
                   /      b
                  /        \
                  c -- d -- e
                   \   |  /
                    \  | /
                       f 
  
   */
 console.log(graph.Dijkstras_algorithm('a','e'));

//   shortest path ------->  [ 'a', 'c', 'd', 'f', 'e' ]