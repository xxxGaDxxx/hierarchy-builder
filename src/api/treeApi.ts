import { CreateNodeType, DeleteNodeType, TreeNodeType, UpdateNameNodeType } from '@/api/types.ts';
import { instance } from './baseApi.ts';

const TREE_NAME = import.meta.env.VITE_BASE_TREE_NAME;

const treeApi = {
  getTree() {
    return instance.post<TreeNodeType>(`/api.user.tree.get?treeName=${TREE_NAME}`);
  },

  createNode(params: CreateNodeType) {
    return instance.post<never>(
      `/api.user.tree.node.create?treeName=${TREE_NAME}&parentNodeId=${params.parentNodeId}&nodeName=${params.nodeName}`,
    );
  },

  updateNameNode(params: UpdateNameNodeType) {
    return instance.post<never>(
      `/api.user.tree.node.rename?treeName=${TREE_NAME}&nodeId=${params.nodeId}&newNodeName=${params.newNodeName}`,
    );
  },

  deleteNode(params: DeleteNodeType) {
    return instance.post<never>(
      `/api.user.tree.node.delete?treeName=${TREE_NAME}&nodeId=${params.nodeId}`,
    );
  },
};

export default treeApi;
