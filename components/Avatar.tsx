import Image from "next/image";

import profilePic from "../public/xiaoming.jpeg";

function Avatar() {
  return (
    <div className="">
      <Image src={profilePic} alt="Xiaoming Fu" width={320} height={320} />
    </div>
  );
}

export default Avatar;
