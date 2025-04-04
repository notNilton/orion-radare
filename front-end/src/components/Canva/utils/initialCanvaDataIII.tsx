import { useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  MarkerType,
} from "reactflow";

import cnOneThree from "./customNodeOneThree";
import cnOneOne from "./customNodeOneOne";
import cnTwoTwo from "./customNodeTwoTwo";
import cnTwoOne from "./customNodeTwoOne";
import cnOneTwo from "./customNodeOneTwo";

const nodeTypes = {
  cnOneThree: cnOneThree,
  cnOneOne: cnOneOne,
  cnTwoTwo: cnTwoTwo,
  cnTwoOne: cnTwoOne,
  cnOneTwo: cnOneTwo,
};

const initialNodes = [
  {
    id: "input",
    type: "input",
    data: { label: "Input", isConnectable: true },
    style: {
      background: "white",
      border: "2px solid black",
      padding: "3px",
      width: "100px",
    },
    position: { x: 100, y: 50 },
  },
  {
    id: "node-1",
    type: "cnOneTwo",
    data: { label: "Node 1", isConnectable: true },
    style: {
      background: "white",
      border: "2px solid black",
      padding: "3px",
      width: "100px",
    },
    position: { x: 0, y: 200 },
  },
  {
    id: "node-2",
    type: "cnOneTwo",
    data: { label: "Node 2", isConnectable: true },
    style: {
      background: "white",
      border: "2px solid black",
      padding: "3px",
      width: "100px",
    },
    position: { x: 300, y: 350 },
  },
  {
    id: "output-1",
    type: "output",
    data: { label: "Output 1", isConnectable: true },
    style: {
      background: "white",
      border: "2px solid black",
      padding: "3px",
      width: "100px",
    },
    position: { x: 100, y: 500 },
  },
  {
    id: "output-2",
    type: "output",
    data: { label: "Output 2", isConnectable: true },
    style: {
      background: "white",
      border: "2px solid black",
      padding: "3px",
      width: "100px",
    },
    position: { x: 300, y: 500 },
  },
  {
    id: "output-3",
    type: "output",
    data: { label: "Output 3", isConnectable: true },
    style: {
      background: "white",
      border: "2px solid black",
      padding: "3px",
      width: "100px",
    },
    position: { x: 600, y: 500 },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "input",
    target: "node-1",
    value: 161,
    tolerance: 0.05,
    nome: "Alucard",
    label: "Nome: Alucard, Valor: 161, Tolerância: 0.05",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    type: 'step', // Define o tipo da aresta como 'step'
  },
  {
    id: "e2-3",
    source: "node-1",
    sourceHandle: "a",
    target: "output-1",
    value: 79,
    tolerance: 0.01,
    nome: "Laravel",
    label: "Nome: Laravel, Valor: 79, Tolerância: 0.01",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    type: 'step', // Define o tipo da aresta como 'step'
  },
  {
    id: "e3-4",
    source: "node-1",
    sourceHandle: "b",
    target: "node-2",
    value: 80,
    tolerance: 0.01,
    nome: "Orion",
    label: "Nome: Orion, Valor: 80, Tolerância: 0.01",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    type: 'step', // Define o tipo da aresta como 'step'
  },
  {
    id: "e4-5",
    source: "node-2",
    target: "output-2",
    value: 20,
    tolerance: 0.1,
    nome: "Sigma",
    label: "Nome: Sigma, Valor: 20, Tolerância: 0.1",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    type: 'step', // Define o tipo da aresta como 'step'
  },
  {
    id: "e5-6",
    source: "node-2",
    sourceHandle: "b",
    target: "output-3",
    value: 63,
    tolerance: 0.05,
    nome: "Phoenix",
    label: "Nome: Phoenix, Valor: 63, Tolerância: 0.05",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    type: 'step', // Define o tipo da aresta como 'step'
  },
];

export { initialNodes, initialEdges, nodeTypes };

const Flow = () => {
  const [nodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <Controls />
      <Background />
      <Panel position="top-left" />
    </ReactFlow>
  );
};

export default Flow;
