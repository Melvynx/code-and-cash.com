import Logo from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ nav = true }: { nav?: boolean }) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block group" href="/" aria-label="Cruip">
              <Image src={Logo} width={36} height={28} alt="Logo" />
            </Link>
          </div>
          {/* Desktop navigation */}
          {nav && (
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    className="btn-sm text-white bg-blue-500 hover:bg-blue-600 group shadow-sm"
                    href="/subscribe"
                  >
                    Subscribe{' '}
                    <span className="tracking-normal text-blue-2300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
