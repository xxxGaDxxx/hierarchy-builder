import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react';
import { Modal } from '@/components/ui-toolkit/modal/Modal.tsx';
import Input from '@/components/ui-toolkit/input/Input.tsx';
import { Button } from '@/components/ui-toolkit/button/Button.tsx';
import { EditOrAddModalProps } from '@/components/modals-node/types.ts';
import Loader from '@/components/ui-toolkit/loader/Loader.tsx';
import styles from './Modals.module.scss';

const EditOrAddModal: FC<EditOrAddModalProps> = ({
  titleModal,
  labelInput,
  isLoading,
  isOpen,
  onOpenChange,
  onSubmitModal,
}) => {
  const [valueInput, setValueInput] = useState('');

  const onHandlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValueInput(value);
  };

  const onCloseModal = () => {
    setValueInput('');
    onOpenChange(false);
  };

  const onHandlerSubmitModal = () => {
    onSubmitModal(valueInput);
  };

  useEffect(() => {
    if (!isLoading) {
      onCloseModal();
    }
  }, [isLoading]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmitModal(valueInput);
    }
  };

  return (
    <Modal title={titleModal} isOpen={isOpen} onOpenChange={onCloseModal}>
      {isLoading ? (
        <Loader />
      ) : (
        <Input
          value={valueInput}
          onChange={onHandlerChange}
          label={labelInput}
          onKeyDown={handleKeyDown}
        />
      )}

      <div className={styles.containerButton}>
        <Button variant="red" onClick={onCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={onHandlerSubmitModal}>
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default EditOrAddModal;
