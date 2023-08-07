import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-[70%]">
      <Image
        src={"/bg.svg"}
        width={500}
        height={500}
        alt=""
        className="translate-z-0 w-full h-full "
      />
    </div>
  );
};

export default Avatar;
