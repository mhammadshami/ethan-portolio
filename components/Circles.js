// next image
import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] ">
      <Image
        src={"/circles.png"}
        width={260}
        height={260}
        alt=""
        className="w-full h-full "
      />
    </div>
  );
};

export default Circles;
