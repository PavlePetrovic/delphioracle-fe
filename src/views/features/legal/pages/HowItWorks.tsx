import { useEffect } from "react";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";

const HowItWorks = () => {
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ScrollWrapper id="scrollHowItWorks">
      <div className="flex flex-col items-start justify-center gap-4 pb-3 text-white w888:px-2">
        <div className="mt-2 flex w-full items-center justify-between">
          <h1 className="text-center font-philosopher text-3xl text-gold w888:text-2xl">
            🔮 How It Works - Your Oracle Guide
          </h1>
          <div className="h-[1px] w-[34px]"></div>
        </div>

        <p className="text-base font-light">
          Curious about your cosmic path? The Delphi Oracle blends AI-powered
          astrology with ancient wisdom to bring you personalized insights on
          love, career, friendships, and self-discovery—all in one mystical
          space. Here's how to start your journey.
        </p>

        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-[20px] text-gold">
              🌀 Step 1: Set Up Your Personalized Oracle Profile
            </h1>
            <div className="text-base font-light">
              <p className="text-base font-light">
                To get insights made just for you, start by creating your
                profile:
              </p>
              <br />
              <p className="text-base font-light">
                ✔ Drop in your birth details - name, date, time, and place of
                birth, gender, and preferred language.
                <br />✔ Pick your oracle vibe:
              </p>
              <br />
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-medium">
                    Astrological Expert Level -{" "}
                  </span>
                  Deep, technical astrology for pros.
                </li>
                <li>
                  <span className="font-medium">
                    Moderate Astrology + Daily Language -{" "}
                  </span>
                  A mix of astrology and real talk.
                </li>
                <li>
                  <span className="font-medium">Simple Daily Language - </span>
                  Straightforward, no-jargon answers.
                </li>
              </ul>
              <br />
              <p className="text-base font-light">
                💫 Instant Gift: Your profile setup gives you a FREE
                personalized reading and 3 credits to explore!
              </p>
            </div>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-[20px] text-gold">
              🔹 Step 2: Ask the Oracle Anything
            </h1>
            <p className="text-base font-light">
              Use your free credits to explore categories like:
              <br />
              <br />
              💡 Know Thyself - Find out who you really are.
              <br />
              💖 Love Realm - Crushes, soulmates, or 'what are we?'' moments.
              <br />
              💼 Career & Finances - Get clarity on your path {"("}or that side
              hustle!{")"}.
              <br />
              🌿 Health & Wellbeing - Mind, body, energy check-ins.
              <br />
              🌍 Social Sphere - Friendships, connections, and vibing with the
              right people.
              <br />
              <br />
              Or, skip the categories and ask whatever's on your mind.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-[20px] text-gold">
              🔹 Step 3: Unlock More Magic - Sign Up for Free
            </h1>
            <p className="text-base font-light">
              Why sign up? Because you'll get:
              <br />
              <br />
              ✨ Bonus Credits - More free readings, duh.
              <br />
              ❤️ Synastry Readings - Compare birth charts with your crush,
              bestie, or business partner.
              <br />
              🔄 Referral Rewards - Get free credits just for sharing with
              friends.
              <br />
              <br />
              🎁 Welcome Gift: If you don't have a referral code, use
              COSMICSTART at sign-up for extra credits!
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-[20px] text-gold">
              🔹 Step 4: See the Compatibility Vibes with Synastry
            </h1>
            <p className="text-base font-light">
              Want to know if the stars say “meant to be” or “major red flag”?
              Synastry lets you:
              <br />
              ✔ Decode romantic chemistry - Attraction, communication,
              long-term vibes.
              <br />✔ Check friendship energy - Why you click {"("}or why
              they're acting weird{")"}.
              <br />✔ Understand business partners - Work styles, success
              potential, and smooth collabs.
              <br />
              <br />
              Just drop in their birth details {"("}date, time, and place{")"},
              and let the Oracle do its thing.
              <br />
              <br />
              💫 Bonus: Ask custom questions to dive deeper into your
              connections.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-[20px] text-gold">
              🔹 Step 5: Stack Up Free Credits {"("}or Buy More{")"}
            </h1>
            <div>
              <p className="text-base font-light">💰 Earn credits for free:</p>
              <br />
              <ul className="list-disc pl-6">
                <li>
                  📩 Refer a friend: Earn 5 credits per sign-up (they get 3!).
                </li>
              </ul>
              <br />
              <p className="text-base font-light">
                🔮 Want more? Choose a credit pack:
                <br />
                🌟 Starlight Starter - $6.99 {"("}40 credits{")"}
                <br />
                🚀 Stellar Explorer - $13.99 {"("}100 credits{")"}
                <br />
                🌌 Galactic Sage - $24.99 {"("}200 credits{")"}
                <br />
                🔮 Celestial Prodigy - $49.99 {"("}500 credits{")"}
              </p>
            </div>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-[20px] text-gold">
              🔹 Step 6: Start Your Day with a Cosmic Whisper
            </h1>
            <p className="text-base font-light">
              ✨ Get a daily, personalized message based on your birth chart -
              because the universe always has something to say.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-[20px] text-gold">
              🔹 Step 7: Save & Revisit Your Readings Anytime
            </h1>
            <p className="text-base font-light">
              📄 Save your insights as a PDF to reflect on your cosmic growth
              anytime. You can also download and share your Synastry readings -
              because self-discovery is even more powerful when explored
              together.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-[20px] text-gold">
              🔹 Step 8: No App? No Problem. Here's How to Stay Connected.
            </h1>
            <p className="text-base font-light">
              📱 We're working on it, but until then:
              <br />
              ✔ Pin the site to your home screen for quick access.
              <br />
              ✔ Bookmark it in your browser.
              <br />✔ Find us through our social media links.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-[20px] text-gold">
              🔹 Step 9: Troubleshooting & Support
            </h1>
            <p className="text-base font-light">
              Having issues? Here are some quick fixes to common problems:
              <br />
              <br />
              ✔ Didn't receive free credits? Refresh the page, check your email
              for sign-up confirmation, or contact support.
              <br />
              ✔ Experiencing slow responses? Clear your browser cache or try a
              different device.
              <br />
              ✔ Entered wrong birth details? Birth details can't be changed,
              but our support team can help - email support@thedelphioracle.com.
              <br />✔ Need help navigating? Our FAQ section has answers to all
              your questions!
              <br />
              <br />
              💫 Still stuck? Contact us at support@thedelphioracle.com—we're
              happy to assist!
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-[20px] text-gold">
              🔹 Step 10: Your Privacy = Our Priority
            </h1>
            <p className="text-base font-light">
              🔐 Your privacy is our priority. Your data is securely stored and
              used only for personalized insights—no weird tracking, no selling
              your info.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-[20px] text-gold">
              🔹 Step 11: Join the Cosmic Community
            </h1>
            <p className="text-base font-light">
              🌎 Join seekers from 6 continents and 50+ countries already
              exploring The Delphi Oracle!
              <br />
              <br />✨ Your journey with The Delphi Oracle is unique, and we'd
              love to hear about it!
              <br />
              <br />
              🌟 Share your experience using #TheDelphiOracle or tag/mention us
              directly for a chance to be featured on our Instagram, TikTok, or
              website. Whether it's a magical insight, a surprising reading, or
              your thoughts on self-discovery, we want to celebrate your cosmic
              journey with you!
              <br />
              <br />
              📲 Follow us on Instagram, TikTok & Facebook for astrology
              insights, cosmic updates, and mystical memes.
              <br />
              <br />
              📩 Have questions? Our team is here for you!
              <br />
              Reach out to us via our Social Media Channels or
              support@thedelphioracle.com
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-philosopher text-[20px] text-gold">
              ✨ You're Part of Something Bigger - Together, We Evolve
            </h1>
            <p className="text-base font-light">
              Your journey fuels our evolution. By exploring yourself and
              supporting us, you're helping make The Delphi Oracle even
              better—for you and the entire community.
              <br />
              The stars are calling. The Oracle is waiting for you—begin your
              self-discovery journey now!
            </p>
          </div>
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default HowItWorks;
