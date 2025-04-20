import Link from "next/link";
import Image from "next/image";
import { AuthButtons } from "./AuthButtons";

export const Navbar = () => {
  return (
    <header className="px-6 py-4 shadow-sm flex items-center justify-between">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={144} height={30} />
      </Link>
      <AuthButtons />
    </header>
  );
};
