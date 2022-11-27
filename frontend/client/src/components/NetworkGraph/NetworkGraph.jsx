import ConnectionCard from './ConnectionCard';
import styles from './NetworkGraph.module.css'

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacencyList = new Map();
  }

  addVertex(v) {
    this.adjacencyList.set(v, []);
  }

  addEdge(v, w) {
    this.adjacencyList.get(v).push(w);
    this.adjacencyList.get(w).push(v);
  }

  printGraph() {
    const allKeys = this.adjacencyList.keys();
    for (let i of allKeys) {
      const allValues = this.adjacencyList.get(i);
      let concatenate = '';
      for (let j of allValues) {
        concatenate += j + " ";
      }
      console.log(i + " -> " + concatenate);
    }
  }

  bfs() { }
  dfs() { }
}


const NetworkGraph = () => {

  return (
    <div className={styles.PageContainer}>
      <h1>Your Network Graph</h1>
      <ConnectionCard />
    </div>
  )
}

export default NetworkGraph