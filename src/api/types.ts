export type TreeNodeType = {
  id: number;
  name: string;
  children: TreeNodeType[];
};

export type CreateNodeType = {
  nodeName: string;
  parentNodeId: number;
};

export type UpdateNameNodeType = {
  newNodeName: string;
  nodeId: number;
};

export type DeleteNodeType = {
  nodeId: number;
};
