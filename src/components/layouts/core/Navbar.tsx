import DropdownNav from '@/components/ui/DropdownNav';
import Sidebar from '@/components/ui/Sidebar';
import { navLinks } from '@/constants';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

const Navbar = () => {
  const { scrollY } = useScroll();
  const router = useRouter();
  const [isNavBgDark, setIsNavBgDark] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (router.pathname === '/') {
      if (latest > 300) {
        setIsNavBgDark(true);
      } else {
        setIsNavBgDark(false);
      }
    } else {
      if (latest > 10) {
        setIsNavBgDark(true);
      } else {
        setIsNavBgDark(false);
      }
    }
  });

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-colors ${
        RemoveScroll.classNames.fullWidth
      } ${isNavBgDark ? 'bg-slate-900/50 backdrop-blur' : 'bg-transparent'}`}
    >
      <div className="page-padding-x container flex w-full items-center justify-between py-4">
        <p className="cursor-pointer text-xl font-medium uppercase text-white">
          Muvuru
        </p>
        <div className="max-md:hidden">
          <li className="flex space-x-7">
            {navLinks.map((item) => (
              <ul key={item.id}>
                {item.links ? (
                  <DropdownNav
                    key={item.id}
                    items={item.links}
                    caption={item.caption}
                  />
                ) : (
                  <Link
                    href={item.link ?? '#'}
                    className="text-white hover:text-primary"
                  >
                    {item.caption}
                  </Link>
                )}
              </ul>
            ))}
          </li>
        </div>
        <div className="flex items-center md:hidden">
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
