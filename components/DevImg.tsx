import Image from "next/image";

interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
}

function DevImg({ containerStyles, imgSrc }: DevImgProps) {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
}

export default DevImg;
