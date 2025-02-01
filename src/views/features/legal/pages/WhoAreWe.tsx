import { useEffect } from "react";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";

const WhoAreWe = () => {
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ScrollWrapper id="scrollWhoAreWe">
      <div className="flex flex-col items-start justify-center gap-4 pb-3 text-white w888:px-2">
        <div className="mt-3 flex w-full items-center justify-center">
          <h1 className="text-center font-philosopher text-3xl text-gold w888:text-2xl">
            Who Are We
          </h1>
        </div>
        <div className="zmd:gap-2 mt-4 flex items-start justify-start gap-8">
          <div className="flex flex-col gap-5 px-40 text-center w888:px-0">
            <h1 className="font-philosopher text-lg italic text-gold">
              Imagine a life where you're deeply connected to your true self.{" "}
              <br />
              At The Delphi Oracle, we are on a mission to guide and inspire
              individuals on a profound 'Know Thyself' journey. Through
              personalized insights, we help you uncover clarity and purpose,
              empowering your truest, most radiant self to shine.
            </h1>
            <br />
            <p className="text-base font-light">
              We believe in the power of merging ancient wisdom with modern
              technology to make self-discovery accessible to all. Our vision is
              a world where the mystical meets the modern—a place where
              technology becomes a bridge to ancient knowledge, guiding people
              toward alignment with their soul and the universal source.
              <br />
              <br />
              As seekers at heart, we're captivated by life's mysteries, the
              nature of the human spirit, and the unseen energies that connect
              us all. In today's fast-paced world, we're here to help you pause,
              look within, and reconnect with the source. Together, we're
              creating The Delphi Oracle to bring the timeless journey of 'Know
              Thyself' to everyone, anywhere.
              <br />
              <br />
              Our journey has shown us the transformative power of genuine
              wisdom and support. We believe everyone deserves access to
              insights that spark growth, inspire confidence, and foster a
              deeper connection to themselves. We're dedicated to sharing this
              timeless wisdom and building a world where truth, unity, and
              self-awareness can transform lives.
            </p>
            <br />
            <h1 className="font-philosopher text-lg text-gold">
              Begin your journey with us and explore the depths of your true
              self.
            </h1>
          </div>
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default WhoAreWe;
