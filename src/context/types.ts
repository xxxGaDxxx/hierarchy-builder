import { CreateNodeType, DeleteNodeType, TreeNodeType, UpdateNameNodeType } from '@/api/types.ts';
import React from 'react';

export type TreeContextType = {
  treeData: TreeNodeType | null;
  isLoading: boolean;
  getTreeData: () => void;
  createNode: (params: CreateNodeType) => void;
  updateNameNode: (params: UpdateNameNodeType) => void;
  deleteNode: (params: DeleteNodeType) => void;
};

export type TreeProviderProps = {
  children: React.ReactNode;
};

export type ErrorResponse = {
  type: string;
  id: string;
  data: {
    message: string;
  };
};
