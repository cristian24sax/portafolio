import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-dogde z-10 w-[200px] xl:w-[100px] opacity-50">
      <Image src="/top-left-img.png" width={120} height={100} alt="" />
    </div>
  );
};

export default TopLeftImg;
