import { useState } from 'react'

import type { NodeIntf } from './utils/node.interface';
import { fileExplorerData } from './utils/data';
import './App.css'
import Tree from './components/Tree'

function App() {
  const [data, setData] = useState<NodeIntf>(fileExplorerData as NodeIntf);

  const onNodeAddition = (parent: NodeIntf, node: NodeIntf) => {
    const updatedData = { ...data };
    const nodes = [...(parent.nodes ?? [])];

    nodes.push({
      ...node,
      nodes: []
    })

    if (parent.id === "root") {
      updatedData.nodes = nodes;
    } else {
      parent.nodes = nodes;
    }
    setData(updatedData);
  }

  return (
    <>
      <Tree
        node={data}
        parent={null}
        onNodeAddition={onNodeAddition}
        
        >

      </Tree>
    </>
  )
}

export default App
