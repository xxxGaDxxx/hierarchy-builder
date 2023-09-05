interface Modals {
  isOpen: boolean;
  titleModal: string;
  isLoading: boolean;
  onOpenChange: (value: boolean) => void;
}

export interface DeleteModalProps extends Modals {
  nameNode: string;
  onDelete: () => void;
}

export interface EditOrAddModalProps extends Modals {
  labelInput: string;
  onSubmitModal: (valueInput: string) => void;
}
