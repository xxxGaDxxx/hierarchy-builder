import { Typography } from '@/components/ui-toolkit/typography/Typography.tsx';
import Input from '@/components/ui-toolkit/input/Input.tsx';
import { Button } from '@/components/ui-toolkit/button/Button.tsx';
import EditIcon from '@/assets/icons/EditIcon.tsx';
import TrashIcon from '@/assets/icons/TrashIcon.tsx';
import AddIcon from '@/assets/icons/AddIcon.tsx';
import CloseIcon from '@/assets/icons/CloseIcon.tsx';
import { Modal } from '@/components/ui-toolkit/modal/Modal.tsx';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(false);
  const onOpenChangeModal = (value: boolean) => {
    setModal(value);
  };

  return (
    <div>
      <Typography variant="h1" as="h1">
        H1 text
      </Typography>
      <Typography variant="h2" as="h2">
        H2 text
      </Typography>
      <Typography variant="body1" as="p">
        body1 text
      </Typography>
      <Typography variant="error" as="p">
        error text
      </Typography>

      <Input label="Add name" />
      <Input label="Error" errorMessage="no name" />
      <Input label="Error" disabled />

      <Button variant="transparent" icon={<EditIcon />} />
      <Button variant="transparent" icon={<TrashIcon />} />
      <Button variant="transparent" icon={<AddIcon />} onClick={() => onOpenChangeModal(true)} />
      <Button variant="transparentRed" icon={<CloseIcon />} />

      <Button variant="green">green asdasdas</Button>
      <Button variant="red">red asdasdas</Button>

      <Modal isOpen={modal} onOpenChange={onOpenChangeModal} title="123">
        <Input label="Add name" />
      </Modal>
    </div>
  );
}

export default App;
