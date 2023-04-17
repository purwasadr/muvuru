import { useEffect, useState } from 'react';

/* Workaround for touch events propagating to underlying elements https://github.com/radix-ui/primitives/issues/1658 */
export const Overlay = ({ open }: { open: boolean }) => {
  const [visible, setVisible] = useState(open);
  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 200);
      return () => {
        clearTimeout(timer);
      };
    }
    setVisible(true);
    return () => {};
  }, [open]);

  return visible ? (
    <div
      className='fixed inset-0 isolate z-40'
      onClick={(e) => e.stopPropagation()}
    />
  ) : null;
};
