import ZodiacSymbol from "@components/ZodiacSymbol/ZodiacSymbol";

const ProfileVisualization = () => {
  return (
    <div className="w888:w-full w888:gap-4 w888:mb-4 flex w-2/3 flex-col items-center justify-center gap-14">
      <div className="w888:-mt-0 w888:mb-3 -mt-8 flex flex-col items-center">
        <h2 className="font-philosopher text-gold w888:text-lg text-3xl font-semibold">
          Pavle
        </h2>
        <p className="w888:text-sm text-xl font-light text-white">
          May 18. 1994.
        </p>
      </div>
      <div className="w888:w-[80%] -mt-6 flex w-[60%] items-center justify-between">
        <div className="flex flex-col items-start">
          <p className="text-dimmed-text-gray w888:text-xs text-sm">SUN</p>
          <p className="w888:text-base text-xl text-white">Libra</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-dimmed-text-gray w888:text-xs text-sm">ELEMENT</p>
          <p className="w888:text-base text-xl text-white">Air</p>
        </div>
      </div>
      <div className="w888:w-[92%] relative flex w-[78%] items-center justify-between">
        <div className="flex flex-col items-start">
          <p className="text-dimmed-text-gray w888:text-xs text-sm">MOON</p>
          <p className="w888:text-base text-xl text-white">Aries</p>
        </div>
        <div className="absolute flex w-full justify-center">
          <div className="bg-transparent-gray bg-glass w888:p-3 w-fit rounded-full border border-[#ffffff2f] p-8">
            <ZodiacSymbol
              zodiac="gemini"
              className="w888:w-[40px] w888:h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-dimmed-text-gray w888:text-xs text-sm">POLARITY</p>
          <p className="w888:text-base text-xl text-white">Masculine</p>
        </div>
      </div>
      <div className="w888:w-[80%] mt-2 flex w-[60%] items-center justify-between">
        <div className="flex flex-col items-start">
          <p className="text-dimmed-text-gray w888:text-xs text-sm">
            ASCENDANT
          </p>
          <p className="w888:text-base text-xl text-white">Scorpio</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-dimmed-text-gray w888:text-xs text-sm">MODALITY</p>
          <p className="w888:text-base text-xl text-white">Cardinal</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileVisualization;
