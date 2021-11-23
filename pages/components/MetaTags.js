const MetaTags = () => (
  <>
    <meta
      name="title"
      content="Funky Pizza | The best pizza on the blockchain"
    />
    <meta
      name="description"
      content="Tasty collectible NFTs for every pizza lover."
    />

    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.funky.pizza/" />
    <meta property="og:title" content="Funky Pizza" />
    <meta
      property="og:description"
      content="Tasty collectible NFTs for every pizza lover."
    />
    <meta property="og:image" content="/funky-cover.jpg" />

    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.funky.pizza/" />
    <meta property="twitter:title" content="Funky Pizza" />
    <meta
      property="twitter:description"
      content="Tasty collectible NFTs for every pizza lover."
    />
    <meta property="twitter:image" content="/funky-cover.jpg"></meta>
  </>
);

export default MetaTags;
