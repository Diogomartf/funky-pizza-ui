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
        In May 22, 2010, Laszlo agreed to pay 10,000 Bitcoins for two{" "}
        <span className="text-orangeCrust">pizzas</span> . Making the first
        Bitcoin commercial transaction.
      </p>
      <p className="md:leading-9">
        This historic moment and over expensive purchase created a new
        commemoration,{" "}
        <span className="text-orangeCrust">Bitcoin Pizza Day</span>!
      </p>
      <p className="md:leading-9">
        As we want to celebrate this moment, it only makes sense to launch on
        this historic date: <span className="text-orangeCrust">22/05/2022</span>
        .
      </p>
      <p className="md:leading-9">
        We are combining our passions to create this project and this community
        who loves <span className="text-orangeCrust">pizzas</span>, crypto and{" "}
        tech.
      </p>

      <p className="md:leading-9">
        Funky Pizza is a NFT project of algorithmically generated{" "}
        <span className="text-orangeCrust">pizzas</span>, on the Ethereum
        blockchain.
      </p>
      <p className="md:leading-9">
        By owning Funky Pizza you can be part of the community and decide the
        project future. We will make Funky Pizza part of the
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
