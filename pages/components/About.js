const About = () => (
  <div
    id="about"
    className="flex flex-col justify-between pt-24 mb-24 space-y-6 md:mt-0 md:pt-32 md:mb-32 md:space-y-0 md:flex-row"
  >
    <div className="text-xs font-bold md:text-sm text-darkRed">
      About Funky Pizza
    </div>
    <div className="max-w-3xl text-2xl font-bold md:text-4xl text-darkRed">
      <p>
        We are a group of friends that writes and designs software for a living.
        We were having fun minting NFTs when we ordered 
        <span className="text-orangeCrust">Pizza</span>. A thought came, we can
        generate the coolest, weirdest and funkiest pizzas on the blockchain.
        Something we'd put on our wall. This is how it started.
      </p>
      <p>
        <span className="text-orangeCrust">Pizza</span> brings us together. It’s
        culture. World wide. Like, you know, crypto.
      </p>
    </div>
  </div>
);

export default About;
