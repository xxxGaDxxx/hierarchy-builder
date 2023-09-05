import { Button } from '@/components/ui-toolkit/button/Button.tsx';
import AddIcon from '@/assets/icons/AddIcon.tsx';
import EditIcon from '@/assets/icons/EditIcon.tsx';
import TrashIcon from '@/assets/icons/TrashIcon.tsx';
import { Typography } from '@/components/ui-toolkit/typography/Typography.tsx';
import { clsx } from 'clsx';
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon.tsx';
import ArrowDown from '@/assets/icons/ArrowDown.tsx';
import styles from './TreeItem.module.scss';

type TreeItemProps = {
  name: string;
  showChildren: boolean;
  isChildrenExist: boolean;
  isChildren: boolean;
  isActive: boolean;
  onShowChildren: () => void;
  onOpenCreateModal: (value: boolean) => void;
  onOpenUpdateModal: (value: boolean) => void;
  onOpenDeleteModal: (value: boolean) => void;
  onButtonsVisible: (visible: boolean) => void;
};

const TreeItem = ({
  name,
  showChildren,
  isChildrenExist,
  isChildren,
  isActive,
  onShowChildren,
  onOpenDeleteModal,
  onOpenUpdateModal,
  onOpenCreateModal,
  onButtonsVisible,
}: TreeItemProps) => {
  const iconButton = isChildrenExist && (showChildren ? <ArrowRightIcon /> : <ArrowDown />);

  const handleOpenCreateModal = () => {
    onOpenCreateModal(true);
  };
  const handleOpenUpdateModal = () => {
    onOpenUpdateModal(true);
  };
  const handleOpenDeleteModal = () => {
    onOpenDeleteModal(true);
  };

  const handleClickShow = () => {
    onShowChildren();
    onButtonsVisible(true);
  };

  return (
    <div className={clsx(styles.root, isActive && styles.active)}>
      <Button
        variant="default"
        onClick={handleClickShow}
        icon={iconButton}
        className={clsx(!isChildrenExist && styles.disable)}
        // disabled={!isChildrenExist}
      >
        <Typography variant="body1" as="p">
          {name}
        </Typography>
      </Button>

      {isActive && (
        <div className={styles.containerButton}>
          <Button variant="transparent" onClick={handleOpenCreateModal}>
            <AddIcon />
          </Button>
          {isChildren && (
            <>
              <Button variant="transparent" onClick={handleOpenUpdateModal}>
                <EditIcon />
              </Button>
              <Button variant="transparentRed" onClick={handleOpenDeleteModal}>
                <TrashIcon />
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default TreeItem;
