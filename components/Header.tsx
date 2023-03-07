import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex item-center space-x-2">
        <Link href="/" />
        <Image
          src="https://links.papareact.com/1m8"
          alt={"logo"}
          className="rounded-full"
          width={50}
          height={50}
        />
      </div>
      <div></div>
    </header>
  );
}

export default Header;
