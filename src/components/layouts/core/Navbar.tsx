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
      className={`fixed z-50 inset-x-0 top-0 transition-colors flex justify-center ${RemoveScroll.classNames.fullWidth} ${
        isNavBgDark ? 'bg-slate-900/50 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center container px-6 md:px-10 py-5 w-full">
        <p className="text-xl font-medium text-white uppercase">Muvuru</p>
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
        <div className="md:hidden">
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
