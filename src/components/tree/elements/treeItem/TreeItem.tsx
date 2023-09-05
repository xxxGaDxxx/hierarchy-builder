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
  onShowChildren: () => void;
  onOpenCreateModal: (value: boolean) => void;
  onOpenUpdateModal: (value: boolean) => void;
  onOpenDeleteModal: (value: boolean) => void;
};
const TreeItem = ({
  name,
  showChildren,
  isChildrenExist,
  isChildren,
  onShowChildren,
  onOpenDeleteModal,
  onOpenUpdateModal,
  onOpenCreateModal,
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
  return (
    // TODO Active
    <div className={clsx(styles.root)}>
      <Button
        variant="default"
        onClick={onShowChildren}
        icon={iconButton}
        disabled={!isChildrenExist}
      >
        <Typography variant="body1" as="p">
          {name}
        </Typography>
      </Button>

      {/* {active && ( */}
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
      {/* )} */}
    </div>
  );
};
export default TreeItem;
