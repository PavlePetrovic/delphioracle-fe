import { useEffect } from "react";
import Accordion from "@components/Accordion/Accordion";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";

const faqContent = [
  {
    title: "How does The Delphi Oracle work?",
    content:
      "The Delphi Oracle uses your birth information to create personalized astrology readings and relationship insights. After setting up your profile, you'll receive free credits to explore readings in categories like Know Thyself, Love Realm, Career & Finances, Health & Wellbeing, and Social Sphere.",
  },
  {
    title: "What types of readings can I access?",
    content:
      "Explore individual readings for personal growth, career, relationships, health, and social dynamics. By signing up, you unlock synastry readings to explore compatibility in Romance, Friendship, and Business. Plus, signing up gives you extra free credits!",
  },
  {
    title: "What is synastry?",
    content:
      "Synastry is a method of exploring compatibility and relationship dynamics by comparing two birth charts. In The Delphi Oracle, synastry reveals unique insights into how you connect with others, offering a deeper understanding of the strengths, challenges, and growth opportunities in your relationships. You can explore synastry in Romance, Friendship, and Business categories to gain clarity on relationship dynamics and compatibility.",
  },
  {
    title: "How do I get credits, and what are my top-up options?",
    content:
      "Start with free credits and earn more by signing up. You can earn additional credits through our Referral Program (invite friends to join) or by watching ads (up to 5 per day). To top up, choose from flexible packages, including Starlight Starter, Stellar Explorer, Galactic Sage, and Celestial Prodigy.",
  },
  {
    title: "How do I choose my preferred response style?",
    content:
      "During setup, you can select from three response styles: Astrological Expert Level: In-depth, technical astrology terminology,Moderate Astrology with Daily Language: A mix of astrology terms and everyday language. Simple Daily Language: Clear, easy-to-understand answers without astrology jargon.",
  },
  {
    title: "Where can I find my referral code?",
    content:
      "To locate your referral code, go to Profile > Settings. Here, you'll see your unique referral code, which you can customize and easily copy to share with friends.",
  },
  {
    title: "How do I use the referral code COSMICSTART?",
    content:
      "If you're new to The Delphi Oracle, enter COSMICSTART during sign-up to receive bonus credits.",
  },
  {
    title: "Can I come back to my readings or save them for later?",
    content:
      "Yes, you can export your readings as a PDF, making it easy to save and revisit them. This feature allows you to track your journey and reflect on insights over time.",
  },
  {
    title: "What happens to unused credits?",
    content:
      "Unused credits stay in your account and remain available for as long as you decide to come back and use them. There's no expiration, so you can continue your journey whenever you're ready.",
  },
  {
    title: "How do I change the language of my response?",
    content:
      "If you want a response in a different language, simply specify it in your question. For example, “What habits will best support me to achieve my highest potential? Write the answer in Spanish.” This applies to any language you choose.",
  },
  {
    title:
      "How can I connect with others on the Know Thyself journey with The Delphi Oracle?",
    content:
      "Join our community of like-minded individuals on social media to connect, share, and engage with others exploring self-discovery.",
  },
  {
    title: "How can I delete my account?",
    content:
      "If you'd like to delete your account, go to Profile > Settings and select Delete Account. This will permanently remove your data and account from The Delphi Oracle.",
  },
  {
    title:
      "What should I do if my response is delayed or if I experience a technical issue?",
    content:
      "If responses are delayed or an issue occurs, try refreshing the page and re-entering your question. If the issue persists, please reach out to us through the support form on our website, and we'll be happy to help.",
  },
  {
    title: "Is my information secure on The Delphi Oracle?",
    content:
      "Yes, your privacy is our priority. All data is confidential and never shared with third parties. Our system is designed with strong security measures to protect your information.",
  },
  {
    title: "How can I ask questions to get the best answers?",
    content:
      "To receive precise answers, ask specific, focused questions. For example, instead of 'What's in store for me?', try 'What are key events in my career for 2024?' Including an area of life or time frame helps the oracleprovide relevant insights.",
  },
  {
    title: "How can I access The Delphi Oracle on my phone?",
    content:
      "While we don't have an app yet, you can pin the website to your home screen, bookmark it, or access it via our social media profiles.",
  },
  {
    title: "How can I contact support?",
    content:
      "If you have questions or need assistance, please use the support form on our website to get in touch. We're here to help and ensure a smooth experience.",
  },
];

const FAQ = () => {
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ScrollWrapper id="scrollFAQ">
      <div className="w888:px-2 flex flex-col items-start justify-center gap-4 pb-3 pr-2.5 text-white">
        <div className="mt-2 flex w-full items-center justify-between">
          <h1 className="font-philosopher text-gold w888:text-2xl text-center text-3xl">
            FAQ
          </h1>
        </div>
        {faqContent?.map((item, index) => (
          <div key={index} className="flex w-full flex-col">
            <Accordion
              key={index}
              containerClassName="w-full"
              title={
                <h4 className="font-philosopher text-xl">{`${index + 1}. ${
                  item.title
                }`}</h4>
              }
              defaultState={false}
            >
              <p className="text-base font-light transition-all">
                {item.content}
              </p>
            </Accordion>
            {index + 1 !== faqContent?.length ? (
              <div className="mt-[18px] h-[1px] w-full bg-[#FFFFFF3D]"></div>
            ) : null}
          </div>
        ))}
      </div>
    </ScrollWrapper>
  );
};

export default FAQ;
