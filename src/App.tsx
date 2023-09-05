import { Typography } from '@/components/ui-toolkit/typography/Typography.tsx';
import Input from '@/components/ui-toolkit/input/Input.tsx';
import { Button } from '@/components/ui-toolkit/button/Button.tsx';
import EditIcon from '@/assets/icons/EditIcon.tsx';
import TrashIcon from '@/assets/icons/TrashIcon.tsx';
import AddIcon from '@/assets/icons/AddIcon.tsx';
import CloseIcon from '@/assets/icons/CloseIcon.tsx';
import EditOrAddModal from '@/components/modals-node/EditOrAddModal.tsx';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(false);
  const onOpenChangeModal = (value: boolean) => {
    setModal(value);
  };

  const onHandlerSubmitModal = (valueInput: string) => {
    console.log('valueInput', valueInput);
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

      <Button variant="primary">green asdasdas</Button>
      <Button variant="red">red asdasdas</Button>

      <EditOrAddModal
        titleModal="123123"
        labelInput="123123"
        isOpen={modal}
        onOpenChange={onOpenChangeModal}
        onSubmitModal={onHandlerSubmitModal}
      />
    </div>
  );
}

export default App;
