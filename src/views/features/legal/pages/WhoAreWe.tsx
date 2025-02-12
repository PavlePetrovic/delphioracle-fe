import { useEffect } from "react";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";

const WhoAreWe = () => {
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ScrollWrapper id="scrollWhoAreWe" className="w-full">
      <div className="mx-auto flex max-w-[60%] flex-col items-center justify-center gap-5 pb-3 text-center text-white w1024:max-w-[70%] w888:max-w-full w888:px-2">
        <h1 className="text-center font-philosopher text-3xl text-gold w888:mt-2 w888:text-2xl">
          Who Are We
        </h1>
        <p className="text-base font-light">
          What if astrology wasn't just a belief, but a{" "}
          <span className="font-medium text-gold">
            tool for self-discovery?
          </span>
        </p>
        <p className="text-base font-light">
          At The Delphi Oracle, we blend{" "}
          <span className="font-medium text-gold">AI-powered insights</span>{" "}
          with <span className="font-medium text-gold">ancient wisdom </span>
          to help you{" "}
          <span className="font-medium text-gold">
            connect with your true self.
          </span>
        </p>
        <div className="my-3 h-[1px] w-full rounded-xl bg-main-grey" />
        <h1 className="text-center font-philosopher text-3xl text-gold w888:text-2xl">
          Our Mission
        </h1>
        <p className="text-base font-light">
          To guide{" "}
          <span className="font-medium text-gold">10 million individuals</span>{" "}
          on their journey of{" "}
          <span className="font-medium text-gold">self-discovery</span>, helping
          them uncover their{" "}
          <span className="font-medium text-gold">
            talents, passions, and life purpose{" "}
          </span>
          through{" "}
          <span className="font-medium text-gold">personalized astrology.</span>
        </p>
        <div className="my-3 h-[1px] w-full rounded-xl bg-main-grey" />
        <h1 className="text-center font-philosopher text-3xl text-gold w888:text-2xl">
          Our Vision
        </h1>
        <p className="text-base font-light">
          A world where{" "}
          <span className="font-medium text-gold">
            technology and ancient wisdom collide
          </span>
          , making{" "}
          <span className="font-medium text-gold">
            self-awareness, clarity, and alignment
          </span>{" "}
          more accessible than ever.
        </p>
        <p className="text-base font-light">
          We're more than an{" "}
          <span className="font-medium text-gold">astrology platform</span> -
          we're your{" "}
          <span className="font-medium text-gold">cosmic guide.</span>
        </p>
        <p className="text-base font-light">
          Through our{" "}
          <span className="font-medium text-gold">
            AI-powered astrology readings
          </span>{" "}
          and{" "}
          <span className="font-medium text-gold">personalized insights</span>{" "}
          designed with{" "}
          <span className="font-medium text-gold">human expertise</span>, we
          help you:
        </p>
        <ul className="list-disc self-start pl-6 text-left">
          <li className="font-medium text-gold">Understand your birth chart</li>
          <li className="font-medium text-gold">
            Explore relationship compatibility
          </li>
          <li className="font-medium text-gold">
            Navigate life's biggest and smallest questions with confidence
          </li>
        </ul>
        <p className="text-base font-light">
          Whether you're seeking clarity, self-awareness, or deeper connections,
          The Delphi Oracle provides the guidance you need.
        </p>
        <p className="text-base font-light">
          In a world that moves fast, we offer a space to pause, reflect, and
          reconnect with yourself.
        </p>
        <p className="text-base font-light">
          The Delphi Oracle is{" "}
          <span className="font-medium text-gold">more than a website</span> -
          it's your{" "}
          <span className="font-medium text-gold">
            trusted companion on the journey to <br />
            <br /> Know Thyself.
          </span>
        </p>
      </div>
    </ScrollWrapper>
  );
};

export default WhoAreWe;
