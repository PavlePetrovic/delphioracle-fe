import Aquarius from "@assets/icons/zodiac-symbols/aquarius.svg";
import Aries from "@assets/icons/zodiac-symbols/aries.svg";
import Cancer from "@assets/icons/zodiac-symbols/cancer.svg";
import Capricorn from "@assets/icons/zodiac-symbols/capricorn.svg";
import Gemini from "@assets/icons/zodiac-symbols/gemini.svg";
import Leo from "@assets/icons/zodiac-symbols/leo.svg";
import Libra from "@assets/icons/zodiac-symbols/libra.svg";
import Pisces from "@assets/icons/zodiac-symbols/pisces.svg";
import Sagittarius from "@assets/icons/zodiac-symbols/sagittarius.svg";
import Scorpio from "@assets/icons/zodiac-symbols/scorpio.svg";
import Taurus from "@assets/icons/zodiac-symbols/taurus.svg";
import Virgo from "@assets/icons/zodiac-symbols/virgo.svg";

const ZodiacSymbol = ({
  zodiac,
  className,
}: {
  zodiac: string;
  className?: string;
}) => {
  const getZodiacSymbol = (symbol: string): JSX.Element => {
    // Rendering components based on wizard step
    switch (symbol.toLowerCase()) {
      case "aquarius":
        return <Aquarius className={`${className}`} />;

      case "aries":
        return <Aries className={`${className}`} />;

      case "cancer":
        return <Cancer className={`${className}`} />;

      case "capricorn":
        return <Capricorn className={`${className}`} />;

      case "gemini":
        return <Gemini className={`${className}`} />;

      case "leo":
        return <Leo className={`${className}`} />;

      case "libra":
        return <Libra className={`${className}`} />;

      case "pisces":
        return <Pisces className={`${className}`} />;

      case "sagittarius":
        return <Sagittarius className={`${className}`} />;

      case "scorpio":
        return <Scorpio className={`${className}`} />;

      case "taurus":
        return <Taurus className={`${className}`} />;

      case "virgo":
        return <Virgo className={`${className}`} />;

      default:
        return <Virgo className={`${className}`} />;
    }
  };
  return getZodiacSymbol(zodiac);
};

export default ZodiacSymbol;
