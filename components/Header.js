import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header
      className={`${
        router.pathname === "/"
          ? "bg-gradient-to-r from-primary via-black/40 to-black/30"
          : "bg-primary/30"
      } relative  z-30 w-full flex items-center px-16 xl:px-60 xl:h-[90px]`}
    >
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
