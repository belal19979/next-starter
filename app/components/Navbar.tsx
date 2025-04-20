import Link from "next/link";
import Image from "next/image";
import { AuthButtons } from "./AuthButtons";

export const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={144}
            height={30}
            className="h-8 w-auto"
          />
        </Link>
        <AuthButtons />
      </nav>
    </header>
  );
};
