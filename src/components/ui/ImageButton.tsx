import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';

interface Props
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonStyles> {}

const buttonStyles = cva(
  'block shadow-sm font-medium focus:outline-none disabled:pointer-events-none',
  {
    variants: {
      intent: {
        primary: ['text-white', 'bg-red-700 hover:bg-red-800'],
        text: ['bg-transparent text-red-700'],
      },
      size: {
        small: 'p-1 rounded-sm',
        base: 'p-2 rounded-md',
        large: 'p-2.5 rounded-md',
      },
    },
    compoundVariants: [
      
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'base',
    },
  }
);

const ImageButton = ({
  className,
  children,
  size,
  intent,
  ...props
}: Props) => {
  return (
    <button
      className={cn(
        buttonStyles({size, intent }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ImageButton;