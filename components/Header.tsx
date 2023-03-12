import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex item-center space-x-2 place-items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt={"logo"}
            className="rounded-full"
            width={50}
            height={50}
          />
        </Link>
        <p>AI Blog</p>
      </div>
      <div>
        <Link
          href={"https://www.google.com"}
          className={
            "hidden md:block px-5 py-3 text-sm md:text-base bg-gray-900 text-amber-500  items-center rounded-full"
          }
        >
          Go to google
        </Link>
      </div>
    </header>
  );
}

export default Header;
