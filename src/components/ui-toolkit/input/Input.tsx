import { ComponentProps, FC, HTMLProps, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Typography } from '@/components/ui-toolkit/typography/Typography.tsx';
import styles from './Input.module.scss';

export type InputProps = {
  label?: string;
  errorMessage?: string;
  className?: string;
  slider?: ReactNode;
  containerProps?: ComponentProps<'div'>;
  labelProps?: ComponentProps<'label'>;
} & HTMLProps<HTMLInputElement>;

const Input: FC<InputProps> = ({
  label,
  errorMessage,
  containerProps,
  labelProps,
  className,
  disabled,
  ...props
}) => {
  const classNames = {
    root: clsx(styles.root, containerProps?.className),
    fieldContainer: clsx(styles.fieldContainer),
    field: clsx(styles.field, className, Boolean(errorMessage) && styles.error),
    label: clsx(styles.label, labelProps?.className, disabled && styles.disabled),
    error: clsx(styles.error),
  };

  return (
    <div className={classNames.root}>
      {label && (
        <Typography variant="body1" as="label" className={classNames.label}>
          {label}
        </Typography>
      )}

      <div className={classNames.fieldContainer}>
        <input {...props} className={classNames.field} disabled={disabled} />

        <Typography variant="error" className={classNames.error}>
          {errorMessage}
        </Typography>
      </div>
    </div>
  );
};

export default Input;
