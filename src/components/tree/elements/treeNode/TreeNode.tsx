import { FC, useState } from 'react';
import { CreateNodeType, TreeNodeType, UpdateNameNodeType } from '@/api/types.ts';
import TreeItem from '@/components/tree/elements/treeItem/TreeItem.tsx';
import EditOrAddModal from '@/components/modals-node/EditOrAddModal.tsx';
import DeleteModal from '@/components/modals-node/DeleteModal.tsx';
import { useTreeContext } from '@/context/TreeProvider.tsx';

type TreeNodeProps = {
  node: TreeNodeType;
  isChildren: boolean;
  onCreateChild: (dataCreate: CreateNodeType) => void;
  onUpdate: (dataUpdate: UpdateNameNodeType) => void;
  onDelete: (nodeId: number) => void;
};

const TreeNode: FC<TreeNodeProps> = ({ node, isChildren, onCreateChild, onUpdate, onDelete }) => {
  const { isLoading, onNodeVisibleId, nodeVisibleId } = useTreeContext();
  const { id, children, name } = node;

  const [showChildren, setShowChildren] = useState(false);

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleShowChildren = () => {
    setShowChildren((prev) => !prev);
  };

  const handleDataCreate = (valueInput: string) => {
    onCreateChild({
      parentNodeId: id,
      nodeName: valueInput,
    });
  };
  const handleDataUpdate = (valueInput: string) => {
    onUpdate({
      nodeId: id,
      newNodeName: valueInput,
    });
  };
  const handleDelete = () => {
    onDelete(id);
  };

  const handleButtonsVisible = () => {
    onNodeVisibleId(id);
  };

  const isActive = nodeVisibleId === id;

  const isShowChildren = children.length > 0;

  return (
    <>
      <div>
        <TreeItem
          name={name}
          showChildren={showChildren}
          isChildrenExist={isShowChildren}
          isChildren={isChildren}
          onShowChildren={handleShowChildren}
          onOpenCreateModal={setIsOpenCreateModal}
          onOpenUpdateModal={setIsOpenUpdateModal}
          onOpenDeleteModal={setIsOpenDeleteModal}
          isActive={isActive}
          onButtonsVisible={handleButtonsVisible}
        />

        {showChildren && (
          <div style={{ marginLeft: '20px' }}>
            {node.children.map((child) => (
              <TreeNode
                key={child.id}
                isChildren
                node={child}
                onCreateChild={onCreateChild}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>

      <EditOrAddModal
        titleModal="Create node"
        labelInput="Name node"
        isLoading={isLoading}
        onSubmitModal={handleDataCreate}
        isOpen={isOpenCreateModal}
        onOpenChange={setIsOpenCreateModal}
      />
      <EditOrAddModal
        titleModal="Update name node"
        labelInput="New name node"
        isLoading={isLoading}
        onSubmitModal={handleDataUpdate}
        isOpen={isOpenUpdateModal}
        onOpenChange={setIsOpenUpdateModal}
      />
      <DeleteModal
        titleModal="Update name node"
        nameNode={name}
        isLoading={isLoading}
        onDelete={handleDelete}
        isOpen={isOpenDeleteModal}
        onOpenChange={setIsOpenDeleteModal}
      />
    </>
  );
};

export default TreeNode;
