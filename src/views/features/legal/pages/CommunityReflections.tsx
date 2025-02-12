import { useEffect } from "react";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import SliderBar from "@components/SliderBar/SliderBar";
import VideoSlider from "@components/VideoSlider/VideoSlider";
import poster1 from "@assets/images/video-posters/poster-1.png";
import poster2 from "@assets/images/video-posters/poster-2.png";
import poster3 from "@assets/images/video-posters/poster-3.png";
import poster4 from "@assets/images/video-posters/poster-4.png";
import poster5 from "@assets/images/video-posters/poster-5.png";

const messages = [
  {
    message:
      "The Oracle didn't just tell me what I wanted to hear. It told me what I needed to hear. Now I see things from a whole new perspective.",
    author: "Lena, 26, Scorpio, Miami",
  },
  {
    message:
      "I was skeptical at first, but the insights? Spot on. The Oracle basically read my whole soul and handed me the clarity I didn't know I needed.",
    author: "Zara, 23, Capricorn, Melbourne",
  },
  {
    message:
      "I thought astrology was just for fun, but this gave me real guidance. My synastry reading completely changed the way I understand my closest relationships.",
    author: "Stefanos, 24, Cancer, Athens",
  },
  {
    message:
      "Using synastry felt like unlocking a secret level in my relationships. It explained the unspoken things, the pull, the challenges, the lessons. Mind blown.",
    author: "Sophie, 28, Taurus, Paris",
  },
  {
    message:
      "The best part? No fluff. Just deep, real, cosmic wisdom in a way that actually makes sense.",
    author: "Kai, 22, Virgo, Tokyo",
  },
  {
    message:
      "Every time I check my Daily Whisper, it hypes me up like a cosmic pep talk. It's like the universe is reminding me I'm that powerful.",
    author: "Alex, 25, Leo, NYC",
  },
];

const videoPaths = [
  {
    path: "https://thedelphioracle-data-bucket.s3.us-east-1.amazonaws.com/testimonial+1-bluebg.mp4",
    poster: poster1,
  },
  {
    path: "https://thedelphioracle-data-bucket.s3.us-east-1.amazonaws.com/testimonial+3-bluebg.mp4",
    poster: poster5,
  },
  {
    path: "https://thedelphioracle-data-bucket.s3.us-east-1.amazonaws.com/testimonial+4-bluebg.mp4",
    poster: poster2,
  },
  {
    path: "https://thedelphioracle-data-bucket.s3.us-east-1.amazonaws.com/testimonial+5-bluebg.mp4",
    poster: poster4,
  },
  {
    path: "https://thedelphioracle-data-bucket.s3.us-east-1.amazonaws.com/testimonial+2-bluebg.mp4",
    poster: poster3,
  },
];

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
              community shares how The Delphi Oracle has impacted their journey.
            </p>
            <br />
            <br />
            <h1 className="mt-1 font-philosopher text-[22px] text-gold">
              Video Reflections
            </h1>
            {/* Videos Component */}
            <VideoSlider videoPaths={videoPaths} />
            <br />
            <br />
            <p className="mt-[30px] text-base font-light">
              Watch as our community shares personal experiences, revealing the
              clarity, insight, and empowerment they've found with The Delphi
              Oracle.
            </p>
            <br />
            <br />
            <h1 className="mt-3 font-philosopher text-[22px] text-gold">
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
            <p className="mt-6 text-base font-light">
              🌟 Share your experience using #TheDelphiOracle or tag/mention us
              directly for a chance to be featured on our Instagram, TikTok, or
              website. Whether it's a magical insight, a surprising reading, or
              your thoughts on self-discovery, we want to celebrate your cosmic
              journey with you!
            </p>
            <br />
            <br />
            <h1 className="mt-3 font-philosopher text-[22px] text-gold">
              Have questions? Our team is here for you!
            </h1>
            <br />
            <br />
            <br />
            <p className="text-base font-light">
              Reach out to us via our Social Media Channels or
              support@thedelphioracle.com
            </p>
          </div>
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default CommunityReflections;
