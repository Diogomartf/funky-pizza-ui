const About = () => (
  <div
    id="about"
    className="flex flex-col justify-between pt-24 mb-24 space-y-6 lg:mt-0 lg:pt-32 lg:mb-32 lg:space-y-0 lg:flex-row"
  >
    <div className="text-xs font-bold lg:text-sm text-darkRed">
      About Funky Pizza
    </div>
    <div className="max-w-3xl space-y-6 text-xl font-bold lg:text-3xl text-darkRed">
      <p className="md:leading-9">
        Funky Pizza is a NFT project of algorithmically generated{" "}
        <span className="text-orangeCrust">pizzas</span>, on the Ethereum
        blockchain.
      </p>
      <p className="md:leading-9">
        By owning Funky Pizza you can be part of the community and decide the
        future of the project. We will make Funky Pizza part of the{" "}
        <span className="text-orangeCrust">pizza</span> culture.
      </p>
      <p className="md:leading-9">
        The recipe of the <span className="text-orangeCrust">pizzas</span>{" "}
        include different doughs, sauces, cheeses and bunch of funky toppings.
      </p>
    </div>
  </div>
);

export default About;
