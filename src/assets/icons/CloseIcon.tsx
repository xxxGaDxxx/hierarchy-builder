import { forwardRef, memo, Ref, SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.17 14.83 5.66-5.66m0 5.66L9.17 9.17M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

const CloseIcon = memo(ForwardRef);
export default CloseIcon;
