import { footerLinks } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="page-padding-x flex max-[350px]:flex-col py-12 min-[350px]:items-center min-[350px]:justify-between bg-slate-900">
      <section className="min-[350px]:w-1/2 py-8">
        <p className="text-2xl">MUVURU</p>
        <p className="mt-2 text-secondary">
          This web is using API from TheMovieDB
        </p>
      </section>
      <section className="flex min-[350px]:w-1/2 min-[350px]:justify-center">
        {footerLinks.map((linkGroup) => (
          <div className="" key={linkGroup.id}>
            <p className="font-medium">{linkGroup.name}</p>
            <div className="mt-2 md:mt-1 flex flex-col space-y-1 md:space-y-0.5">
              {linkGroup.links.map((link) => (
                <Link className="text-secondary" key={link.id} href={link.link}>
                  {link.caption}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </footer>
  );
};

export default Footer;
