import { CreateNodeType, UpdateNameNodeType } from '@/api/types.ts';
import TreeNode from '@/components/tree/elements/treeNode/TreeNode.tsx';
import { useTreeContext } from '@/context/TreeProvider.tsx';
import styles from './Tree.module.scss';

const Tree = () => {
  const { treeData, createNode, updateNameNode, deleteNode } = useTreeContext();

  const handleCreateChild = (params: CreateNodeType) => {
    createNode(params);
  };

  const handleUpdate = (params: UpdateNameNodeType) => {
    updateNameNode(params);
  };

  const handleDelete = (nodeId: number) => {
    deleteNode({ nodeId });
  };

  return (
    <div className={styles.root}>
      {treeData && (
        <TreeNode
          node={treeData}
          isChildren={false}
          onCreateChild={handleCreateChild}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Tree;
