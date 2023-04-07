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
        primary: [
          'text-white',
          'bg-red-700 hover:bg-red-800',
        ],
        text: [
          'bg-transparent text-red-700',
        ],
      },
      size: {
        small: 'text-xs px-3 py-2',
        base: 'text-sm px-4 py-2',
        large: 'text-base px-5 py-2.5',
      },
      fullWidth: {
        true: 'w-full',
      },
      fullRounded: {
        true: 'rounded-full',
        false: 'rounded-md'
      }
    },
    defaultVariants: {
      intent: 'primary',
      size: 'base',
      fullRounded: true
    },
  }
);

const Button = ({
  className,
  children,
  fullWidth,
  size,
  intent,
  fullRounded,
  ...props
}: Props) => {
  return (
    <button
      className={cn(buttonStyles({ fullWidth, size, intent, fullRounded }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
