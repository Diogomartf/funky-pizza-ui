const About = () => (
  <div
    id="about"
    className="flex flex-col justify-between pt-24 mb-24 space-y-6 lg:mt-0 lg:pt-32 lg:mb-32 lg:space-y-0 lg:flex-row"
  >
    <div className="text-xs font-bold lg:text-sm text-darkRed">
      About Funky Pizza
    </div>
    <div className="max-w-3xl text-2xl font-bold lg:text-4xl text-darkRed">
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
