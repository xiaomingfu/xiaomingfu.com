import type { NextPage } from "next";
import Avatar from "../components/Avatar";
import Intro from "../components/Intro";
import SiteHead from "../components/SiteHead";

const Home: NextPage = () => {
  return (
    <div className="flex w-screen min-h-screen bg-[#101723]">
      <SiteHead />
      <div className="self-center container mx-auto p-4 md:p-10 lg:max-w-screen-lg">
        <div className="flex flex-col space-y-4">
          <Avatar />
          <Intro />
        </div>
      </div>
    </div>
  );
};

export default Home;
