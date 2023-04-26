import { footerLinks } from '@/constants';
import { Github } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-center py-12 bg-slate-900">
      <div className="container page-padding-x flex max-[350px]:flex-col min-[350px]:items-center min-[350px]:justify-between">
        <section className="min-[350px]:w-1/2">
          <p className="text-2xl">MUVURU</p>
          <p className="mt-2 text-secondary">
            This web is created by <Link href={'https://github.com/purwasadr'} className="underline">purwasadr</Link>, use API from TheMovieDB
          </p>
          <div className="mt-3">
            <Link href={'https://github.com/purwasadr/muvuru'}>
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </section>
        <section className="flex max-[350px]:mt-8 min-[350px]:w-1/2 min-[350px]:justify-center">
          {footerLinks.map((linkGroup) => (
            <div className="" key={linkGroup.id}>
              <p className="font-medium">{linkGroup.name}</p>
              <div className="mt-2 flex flex-col space-y-1 md:mt-1 md:space-y-0.5">
                {linkGroup.links.map((link) => (
                  <Link
                    className="text-secondary"
                    key={link.id}
                    href={link.link}
                  >
                    {link.caption}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
