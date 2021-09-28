import { useEffect, useState } from "react";

const pizzaGifs = [
  "https://media.giphy.com/media/aCKMaeduKfFXG/giphy.gif?cid=790b76111fb146f6b10f1573950214281e326c39dc13ffeb&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif?cid=790b7611a85c28261646525957d89c070af0204890871616&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy-downsized-large.gif?cid=790b761194eb7652e8b6f8724f20eb1d09d3b7d3f9c7f9ae&rid=giphy-downsized-large.gif&ct=g",
  "https://media.giphy.com/media/sTUWqCKtxd01W/giphy.gif?cid=790b7611c2f45b175843970f0a1936db3ec00903ecd59816&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/hmzAcor7gBsbK/giphy-downsized-large.gif?cid=790b7611d06716342f56164f69975272e1428a30064d3995&rid=giphy-downsized-large.gif&ct=g",
  "https://media.giphy.com/media/iJa6kOfJ3qN7a/giphy.gif?cid=790b761140a6bb55ddb13f9965f311bb7ed8337096bdd09d&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/hj6nflDqPwiHu/giphy.gif?cid=790b76115dbebb1c25240cf92a47e4e016f93722130c18f1&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/NvGm4wbHod4He/giphy-downsized-large.gif?cid=790b76110f1b81b44f4c79832a304f6e6a8688f80f24b3a6&rid=giphy-downsized-large.gif&ct=g",
  "https://media.giphy.com/media/jn2iXu2HRpMuovBrrV/giphy.gif?cid=790b761176f48066e01f5a71c7507aabe3859b17d7d0fdb3&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/CBzoQNVaqOwAU/giphy.gif?cid=790b76117482637fb004dd4150d573f989275cd2cce31a16&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/4jUv5WgsH8waA/giphy.gif?cid=790b7611efee641dcc638134b2ee1bad929346b00c1f0297&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/daMpw3o98ILnO/giphy.gif?cid=790b7611497f791d32548739c154c34626c6cff2e844c7c1&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/HFFkXFjMgxtOU/giphy.gif?cid=790b7611903f8a33bba03b325d2da819175e461a2e2f0077&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/5xaOcLIExrKt1ZNFY0E/giphy.gif?cid=790b76119eb712cb4d4226089a901c62f478b87e1e0f4765&rid=giphy.gif&ct=g",
];

const PizzaImage = () => {
  const [pizzaGifIndex, setPizzaGifIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(setRandomPizzaIndex, 5000);

    return () => clearInterval(timer);
  }, []);

  const setRandomPizzaIndex = () => {
    const randomIndex = Math.floor(Math.random() * pizzaGifs.length);

    setPizzaGifIndex(randomIndex);
  };

  return (
    <img
      src={pizzaGifs[pizzaGifIndex]}
      alt="Pizza gif"
      className="sm:max-w-2xl hover:animate-spin"
    />
  );
};

export default PizzaImage;
