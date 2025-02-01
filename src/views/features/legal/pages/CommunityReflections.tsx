import { useEffect } from "react";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import SliderBar from "@components/SliderBar/SliderBar";
import VideoSlider from "@components/VideoSlider/VideoSlider";
import video1 from "@assets/videos/video-delphi-1.mp4";
import video2 from "@assets/videos/video-delphi-2.mp4";

const messages = [
  {
    message:
      "The Delphi Oracle gave me clarity in ways I never expected. The readings feel personalized and empowering—I keep coming back to uncover more about myself!",
    author: "Jessica S.",
  },
  {
    message:
      "The synastry readings completely changed the way I view my relationships. I gained insights into my romantic and business connections that I didn’t know were possible.",
    author: "Aron L.",
  },
  {
    message:
      "This platform feels like a guiding light. The daily whispers and career insights have brought me so much clarity and confidence in my journey.",
    author: "Sophia A.",
  },
  {
    message:
      "The Delphi Oracle gave me clarity in ways I never expected. The readings feel personalized and empowering—I keep coming back to uncover more about myself!",
    author: "Sarah C.",
  },
];

const videoPaths = [video1, video2, video1, video2, video1];

const CommunityReflections = () => {
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ScrollWrapper
      id="scrollCommunityReflections"
      className="mx-auto w-full max-w-full"
    >
      <div className="flex flex-col items-start justify-center gap-4 pb-3 text-white w888:px-2">
        <div className="mt-3 flex w-full items-center justify-center">
          <h1 className="text-center font-philosopher text-3xl text-gold w888:text-2xl">
            Community Reflections
          </h1>
        </div>

        <div className="zmd:gap-2 mt-2 flex w-full max-w-full items-start justify-start gap-8">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-2.5 overflow-hidden py-[10px] text-center">
            <p className="text-base font-light">
              At The Delphi Oracle, our mission is to guide you toward deeper
              self-understanding and connection. Through these reflections, our
              community shares how The Delphi Oracle has impacted their journey
            </p>
            <br />
            <h1 className="font-philosopher text-[20px] text-gold">
              Video Reflections
            </h1>

            {/* Videos Component */}
            <VideoSlider videoPaths={videoPaths} />

            <br />
            <h1 className="mt-6 font-philosopher text-[20px] text-gold">
              More Reflections from Our Community
            </h1>
            <p className="text-base font-light">
              In addition to the videos, here are more stories from users who
              have embarked on their journey of self-discovery with us:
            </p>

            {/* SliderBar Component */}
            <SliderBar items={messages} />

            <br />
            <br />
            <h1 className="mt-6 text-center font-philosopher text-3xl text-gold w888:text-2xl">
              Ready to begin your journey?
            </h1>
            <p className="text-base font-light">
              Discover what The Delphi Oracle can reveal about you and your
              connections.
            </p>
          </div>
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default CommunityReflections;
