import { useEffect } from "react";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";

const HowItWorks = () => {
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ScrollWrapper id="scrollHowItWorks">
      <div className="w888:px-2 flex flex-col items-start justify-center gap-4 pb-3 text-white">
        <div className="mt-2 flex w-full items-center justify-between">
          <h1 className="font-philosopher text-gold w888:text-2xl text-center text-3xl">
            How It Works
          </h1>
          <div className="h-[1px] w-[34px]"></div>
        </div>

        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-gold text-[20px]">
              1. Create Your Profile
            </h1>
            <p className="text-base font-light">
              Begin by adding your name, date of birth, place of birth, time of
              birth, gender and preferred language for the oracle's guidance.
              Choose how you'd like the oracle to respond:
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-medium">
                    Astrological Expoert Level:{" "}
                  </span>
                  In-depth, technical astrology terminology for advanced
                  insights.
                </li>
                <li>
                  <span className="font-medium">
                    Moderate Astrology with Daily Language:{" "}
                  </span>
                  A blend of astrology terms and everyday language.
                </li>
                <li>
                  <span className="font-medium">Simple Daily Language: </span>
                  Clear, straightforward answers without astrology jargon.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-gold text-[20px]">
              2. Once your profile is set up
            </h1>
            <p className="text-base font-light">
              You'll receive an initial reading of yourself along with 3 free
              credits to start exploring firther. Use these credits to ask
              questions in categories such as{" "}
              <span className="font-bold">
                Know Thyself, Love Realm, Career & Finances, Health & Wellbeing
                and Social Sphere
              </span>
              , or ask whatever resonates with you.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-gold text-[20px]">
              3. Sign Up to Unlock More Features
            </h1>
            <p className="text-base font-light">
              After using initial credits, sign up to receive additional credits
              and access more features of The Delphi Oracle. Signing up unlocks
              synastry (relationship compatibility) readings, where you can
              explore categories like Romance, Friendship and Business or ask
              your own questions.
              <br />
              <br />
              Welcome Gift: If you don't have a referral code, use{" "}
              <span className="text-gold font-bold">COSMICSTAR </span>
              at sign-up and receive bonus credits as a gift.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-gold text-[20px]">
              4. Explore Your Connections with Synastry
            </h1>
            <p className="text-base font-light">
              Synastry offers a deeper dive into understanding how people relate
              to each other. This powerful feature allows you to explore the
              dynamic connections between you and your loved ones, friends, or
              business partners. By comparing astrological charts, synastry
              reveals the unique energy exchanges that shape your relationships
              and helps you uncover insights into the strengths, challenges, and
              growth opportunities within each connection. Simply add your
              partner's details-name, date of birth, place, and time of birth-to
              access synastry readings. You can explore different areas of
              compatibility, including:
              <br />
              <br />
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-medium">Romance: </span>
                  Gain insights into romantic chemistry, communication styles,
                  and long-term potential.
                </li>
                <li>
                  <span className="font-medium">Friendship: </span>
                  Discover the dynamics that make your friendships meaningful
                  and how to navigate any challenges together.
                </li>
                <li>
                  <span className="font-medium">Business: </span>
                  Understand how to build a productive, harmonious partnership
                  by exploring compatibility in work styles, communication, and
                  mutual goals.
                </li>
              </ul>
              <br />
              In addition to our designated categories, you're free to ask any
              question that resonates with you. Whether you're seeking clarity
              in your love life, deepening bonds with friends, or enhancing
              professional relationships, synastry provides valuable guidance
              for building stronger, more harmonious connections.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-gold text-[20px]">
              5. Top Up Your Credits
            </h1>
            <p className="text-base font-light">
              Our flexible credit options let you explore at your own
              pace-whether you're diving deep or just starting out.
              <br />
              <br />
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-medium">Starlight Starter</span> - $6.99
                  for 40 credits
                </li>
                <li>
                  <span className="font-medium">Stellar Explorer</span> - $13.99
                  for 100 credits
                </li>
                <li>
                  <span className="font-medium">Galactic Sage</span> - $24.99
                  for 200 credits
                </li>
                <li>
                  <span className="font-medium">Celestial Prodigy</span> -
                  $49.99 for 500 credits
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-gold text-[20px]">
              6. Earn Credits
            </h1>
            <p className="text-base font-light">
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-medium">Referral Program: </span>
                  Share your referral code with friends. When they sign up, you
                  eam 5 credits, and they receive 3 credits.
                </li>
                <li>
                  <span className="font-medium">Watch Ads: </span>
                  Earn 3 credits per ad, up to 5 ads per day.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-gold text-[20px]">
              7. Dally Cosmic Whisper
            </h1>
            <p className="text-base font-light">
              Begin each day with a personalized{" "}
              <span className="font-bold">Cosmic Whisper</span>-gentle guidance
              crafted to support your journey and connect you with cosmic
              insights.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-gold text-[20px]">
              8. Export Your Readings
            </h1>
            <p className="text-base font-light">
              Save your insights by exporting readings as a PDF to keep your
              cosmic guidance accessible anytime. You can revisit past insights
              to reflect on your growth and evolving cosmic path.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-gold text-[20px]">
              9. Privacy & Data Security
            </h1>
            <p className="text-base font-light">
              Your privacy is our priority. All personal data is securely stored
              and used solely for creating personalized insights.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-gold text-[20px]">
              10. Connect with Us
            </h1>
            <p className="text-base font-light">
              Join our community of explorers on Instagram, Facebook, and TikTok
              to connect with like-minded individuals and stay updated on new
              features and cosmic guidance. For any questions or support, our
              team is here to help!
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-gold text-[20px]">
              11. Access The Delphi Oracle Anytime
            </h1>
            <p className="text-base font-light">
              While we don't have an app just yet, you can easily pin the
              website to your phone's home screen, bookmark it, or access it
              anytime through our social media profiles.
            </p>
          </div>
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default HowItWorks;
