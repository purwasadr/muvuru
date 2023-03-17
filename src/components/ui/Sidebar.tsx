import * as Dialog from '@radix-ui/react-dialog';
import Button from './Button';
import {AnimatePresence, motion} from 'framer-motion';
import React, {useState} from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, sidebarLinks } from '@/constants';
import Link from 'next/link';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen} >
      <Dialog.Trigger asChild>
        <button className="focus:outline-none">
          <Menu />
        </button>
      </Dialog.Trigger>
      <AnimatePresence>
        {isOpen ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay className="bg-black bg-opacity-40 fixed inset-0 z-40" asChild
              forceMount>
              <motion.div 
                 initial={{opacity: 0}}
                 animate={{opacity: 1}}
                 exit={{opacity: 0}}
                 transition={{bounce: 0}}
              />
            </Dialog.Overlay>
            <Dialog.Content
              className="fixed z-50 inset-y-0 right-0 w-[90vw] max-w-[180px] rounded-l-xl bg-slate-900/70 backdrop-blur p-[25px] focus:outline-none"
              asChild
              forceMount
            >
              <motion.div
                initial={{translateX: '100%'}}
                animate={{translateX: '0%'}}
                exit={{translateX: '100%'}}
                transition={{bounce: 0}}
              >
                <Dialog.Close asChild>
                  <button
                    className="focus:outline-none"
                    aria-label="Close"
                  >
                    <X />
                  </button>
                </Dialog.Close>
                <ul className="flex flex-col mt-3">
                  {sidebarLinks.map((item) => (
                    <li className="" key={item.id} onClick={(e) => {setIsOpen(false)}}>
                      <Link href={item.link} className="block text-secondary py-2 hover:text-primary">{item.caption}</Link>
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
