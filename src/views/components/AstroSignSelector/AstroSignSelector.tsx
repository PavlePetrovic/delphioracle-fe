import { ReactNode } from "react";
import {
  GiAries,
  GiTaurus,
  GiGemini,
  GiCancer,
  GiLeo,
  GiVirgo,
  GiLibra,
  GiScorpio,
  GiSagittarius,
  GiCapricorn,
  GiAquarius,
  GiPisces,
} from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";

const astroSigns = [
  "Aries: The Ram",
  "Taurus: The Bull",
  "Gemini: The Twins",
  "Cancer: The Crab",
  "Leo: The Lion",
  "Virgo: The Virgin",
  "Libra: The Scales",
  "Scorpio: The Scorpion",
  "Sagittarius: The Archer",
  "Capricorn: The Goat",
  "Aquarius: The Water Bearer",
  "Pisces: The Fish",
];

const AstroSignSelector = ({
  type,
  className,
}: {
  type: "text" | "icon";
  className?: string;
}) => {
  const userData = { year: "2018", month: "5", day: "2" };

  const sign: number | null = userData
    ? Number(
        new Intl.DateTimeFormat("fr-TN-u-ca-persian", {
          month: "numeric",
        }).format(
          new Date(
            `${userData?.year}/${userData?.month}/${userData?.day}`,
          ).valueOf(),
        ),
      ) - 1
    : null;

  const getAstroSignIco = (formatedSign: string | null): ReactNode => {
    switch (formatedSign) {
      case "Aries: The Ram":
        return <GiAries className={`${className}`} />;
      case "Taurus: The Bull":
        return <GiTaurus className={`${className}`} />;
      case "Gemini: The Twins":
        return <GiGemini className={`${className}`} />;
      case "Cancer: The Crab":
        return <GiCancer className={`${className}`} />;
      case "Leo: The Lion":
        return <GiLeo className={`${className}`} />;
      case "Libra: The Scales":
        return <GiLibra className={`${className}`} />;
      case "Virgo: The Virgin":
        return <GiVirgo className={`${className}`} />;
      case "Scorpio: The Scorpion":
        return <GiScorpio className={`${className}`} />;
      case "Sagittarius: The Archer":
        return <GiSagittarius className={`${className}`} />;
      case "Capricorn: The Goat":
        return <GiCapricorn className={`${className}`} />;
      case "Aquarius: The Water Bearer":
        return <GiAquarius className={`${className}`} />;
      case "Pisces: The Fish":
        return <GiPisces className={`${className}`} />;
      default:
        return <FaUserAlt className={`${className}`} />;
    }
  };

  return (
    <>
      {type === "icon" ? (
        getAstroSignIco(sign?.toString() ? astroSigns[sign] : null)
      ) : type === "text" ? (
        <span className={`${className}`}>
          {sign?.toString() ? astroSigns[sign] : ""}
        </span>
      ) : (
        <></>
      )}
    </>
  );
};

export default AstroSignSelector;
