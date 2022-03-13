function Intro() {
  const resumeLink =
    "https://docs.google.com/document/d/1Kw1eGMhGr_sX_YrjD7nxmyqBowXem52ZRzjGrv_evVA?usp=sharing";

  return (
    <div className="text-2xl text-[#6AA589] font-intro tracking-wide leading-10">
      <h1 className="text-6xl font-semibold text-[#F8B9B9] font-hi my-8">
        Xiaoming says hi!
      </h1>
      <p className="font-300">
        My name&apos;s <span className="text-[#EFAD7A]">Xiaoming Fu</span>.
        I&apos;m a <span className="text-[#97B3CE]">Software Engineer</span>{" "}
        based in the SF Bay Area. I currently work on{" "}
        <a
          className="underline underline-offset-4"
          href="https://www.loantt.com/"
        >
          a SaaS webapp
        </a>{" "}
        for loan analytics & marketplace at Edge Tradeworks. I&apos;m passionate
        about <span className=" text-[#97B3CE]">fullstack web development</span>
        , <span className=" text-[#97B3CE]">algorithms</span> and{" "}
        <span className=" text-[#97B3CE]">open source</span>. See my resume
        below for more details.
      </p>

      <p className="my-8 space-x-4 text-[#a69b9b] pb-20">
        <a
          className="underline underline-offset-4 cursor-alias"
          href="https://github.com/xiaomingfu"
          target={"_blank"}
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="underline underline-offset-4 cursor-alias"
          href="https://www.linkedin.com/in/xiaoming-fu/"
          target={"_blank"}
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="underline underline-offset-4 cursor-alias"
          href={resumeLink}
          target={"_blank"}
          rel="noreferrer"
        >
          Resume
        </a>
      </p>
    </div>
  );
}

export default Intro;
