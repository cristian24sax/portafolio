import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-60 xl:h-[90px]">
      <div className="container max-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-6">
          <Link href={"/"}>
            <Image
              src={"/crisax.svg"}
              width={200}
              height={30}
              alt=""
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
