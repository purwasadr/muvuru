import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

interface Props extends React.ComponentProps<'button'> {}
// interface Props
//   extends React.ComponentProps<'button'>,
//     VariantProps<typeof buttonStyles> {}

const buttonStyles = cva(
  'shadow-sm font-medium focus:outline-none disabled:pointer-events-none',
  {
    variants: {
      intent: {
        primary: [
          'text-white',
          'bg-indigo-600 hover:bg-indigo-700',
          'focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          'dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800',
        ],
        secondary: [
          'border border-gray-300 bg-white text-gray-700',
          'hover:bg-gray-50',
          'focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
        ],
      },
      size: {
        small: 'rounded-md text-xs px-3 py-2',
        base: 'rounded-md text-sm px-4 py-2',
        large: 'rounded-md text-base px-5 py-2',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'base',
    },
  }
);

const Button = ({ className, children, ...props }: Props) => {
  return (
    <button
      className={twMerge(
        `bg-red-700 hover:bg-red-800 text-white rounded-md text-sm px-4 py-2 shadow-sm focus:outline-none disabled:pointer-events-none`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
