import { createContext, FC, useContext, useEffect, useMemo, useState } from 'react';
import { CreateNodeType, DeleteNodeType, TreeNodeType, UpdateNameNodeType } from '@/api/types.ts';
import { toast } from 'react-toastify';
import treeApi from '@/api/treeApi.ts';
import { AxiosError } from 'axios';
import { ErrorResponse, TreeContextType, TreeProviderProps } from '@/context/types.ts';

const TreeContext = createContext<TreeContextType | undefined>(undefined);

export const useTreeContext = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error('useTreeContext must be used within a TreeProvider');
  }
  return context;
};

export const TreeProvider: FC<TreeProviderProps> = ({ children }) => {
  const [treeData, setTreeData] = useState<TreeNodeType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nodeVisibleId, setNodeVisibleId] = useState<null | number>(null);

  const onNodeVisibleId = (id: number) => {
    setNodeVisibleId(id);
  };

  const getTreeData = async () => {
    setIsLoading(true);

    try {
      const response = await treeApi.getTree();
      setTreeData(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        toast.error(axiosError.response?.data.data.message || 'An error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const createNode = async (params: CreateNodeType) => {
    setIsLoading(true);

    try {
      await treeApi.createNode(params);
      toast.success(`Create node ${params.nodeName}`);
      await getTreeData();
    } catch (error) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        toast.error(axiosError.response?.data.data.message || 'An error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const updateNameNode = async (params: UpdateNameNodeType) => {
    setIsLoading(true);

    try {
      await treeApi.updateNameNode(params);
      toast.success(`Updated node the name to ${params.newNodeName}`);
      await getTreeData();
    } catch (error) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        toast.error(axiosError.response?.data.data.message || 'An error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const deleteNode = async (params: DeleteNodeType) => {
    setIsLoading(true);

    try {
      await treeApi.deleteNode(params);
      toast.success('Delete  node');
      await getTreeData();
    } catch (error) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        toast.error(axiosError.response?.data.data.message || 'An error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTreeData();
  }, []);

  const contextValue = useMemo(
    () => ({
      treeData,
      isLoading,
      nodeVisibleId,
      getTreeData,
      createNode,
      updateNameNode,
      deleteNode,
      onNodeVisibleId,
    }),
    [treeData, isLoading, nodeVisibleId],
  );

  return <TreeContext.Provider value={contextValue}>{children}</TreeContext.Provider>;
};
