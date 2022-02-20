import MintCard from "./MintCard";

export default function MintSection() {
  return (
    <div className="relative pb-24 mb-48 md:pb-0 rounded-xl bg-white md:bg-[url('/mint-bg.svg')] h-full w-full bg-cover	bg-center">
      <div className="md:py-4 lg:py-6 xl:py-7">
        <div className="max-w-xs pt-8 pb-12 mx-auto text-center 2xs:pb-20 xs:pb-24 md:pb-4 md:pt-0">
          <p className="text-2xl font-semibold text-orangeCrust md:text-white md:opacity-95">
            Get your Pizza.
          </p>
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orangy to-orangeCrust md:text-white opacity-90 md:opacity-60">
            Bacon? Aubergine?
          </p>
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orangy to-orangeCrust md:text-white opacity-90 md:opacity-60">
            Gold? ETH? Who knows.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <img
            src="/bg-mint-mobile.png"
            alt="pizza mint background"
            className="absolute max-w-[110%] 2xs:max-w-[98%] xs:max-w-[82%] sm:max-w-[62%] md:hidden md:-z-10"
          />
          <div className="z-10 md:z-0">
            <MintCard />
          </div>
        </div>
      </div>
    </div>
  );
}
