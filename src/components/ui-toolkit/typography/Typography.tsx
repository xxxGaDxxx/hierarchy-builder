import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './Typography.module.scss';

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T;
  variant?: 'h1' | 'h2' | 'body1' | 'caption' | 'error';
  children?: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>,
) => {
  const { as: Component = 'p', variant = 'body1', className, ...restProps } = props;

  return <Component className={clsx(styles[variant], className)} {...restProps} />;
};
