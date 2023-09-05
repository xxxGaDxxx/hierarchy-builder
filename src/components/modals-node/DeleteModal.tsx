import { FC } from 'react';
import { Modal } from '@/components/ui-toolkit/modal/Modal.tsx';
import { Button } from '@/components/ui-toolkit/button/Button.tsx';
import { Typography } from '@/components/ui-toolkit/typography/Typography.tsx';
import { DeleteModalProps } from '@/components/modals-node/types.ts';
import Loader from '@/components/ui-toolkit/loader/Loader.tsx';
import styles from './Modals.module.scss';

const DeleteModal: FC<DeleteModalProps> = ({
  titleModal,
  nameNode,
  isOpen,
  isLoading,
  onOpenChange,
  onDelete,
}) => {
  const onCloseModal = () => {
    onOpenChange(false);
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      onDelete();
    }
  };

  return (
    <Modal title={titleModal} isOpen={isOpen} onOpenChange={onOpenChange}>
      {isLoading ? (
        <Loader />
      ) : (
        <Typography variant="body1" as="span">
          {nameNode}
        </Typography>
      )}

      <div className={styles.containerButton}>
        <Button variant="red" onClick={onCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={onDelete} onKeyDown={handleKeyDown}>
          Save
        </Button>
      </div>
    </Modal>
  );
};
export default DeleteModal;
