import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { sidebarLinks } from '@/constants';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className='focus:outline-none'>
          <Menu />
        </button>
      </Dialog.Trigger>
      <AnimatePresence>
        {isOpen ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay
              className='fixed inset-0 z-40 bg-black bg-opacity-40'
              asChild
              forceMount
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ bounce: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content
              className='fixed inset-y-0 right-0 z-50 w-[90vw] max-w-[160px] md:max-w-[180px] rounded-l-lg bg-slate-900/70 p-5 backdrop-blur focus:outline-none sm:p-6'
              asChild
              forceMount
            >
              <motion.div
                initial={{ translateX: '100%' }}
                animate={{ translateX: '0%' }}
                exit={{ translateX: '100%' }}
                transition={{ bounce: 0 }}
              >
                <Dialog.Close asChild>
                  <button className='focus:outline-none' aria-label='Close'>
                    <X />
                  </button>
                </Dialog.Close>
                <ul className='mt-3 flex flex-col'>
                  {sidebarLinks.map((item) => (
                    <li
                      key={item.id}
                      onClick={(e) => {
                        setIsOpen(false);
                      }}
                    >
                      <Link
                        href={item.link}
                        className='block py-2 text-secondary hover:text-primary'
                      >
                        {item.caption}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* <Button className="mt-4  uppercase w-full">Get Started</Button> */}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default Sidebar;
