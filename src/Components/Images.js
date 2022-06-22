import React from "react";
import FadeIn from './../Components/FadeIn';

const ImgCardData = {
  row1: [
    {
      Id: 1,
      ImageFileName: "https://i.imgur.com/GbjchUH.jpg",
      Classs: "big",
    },
    {
      Id: 2,
      ImageFileName: "https://i.imgur.com/ujxfJSH.jpg",
      Classs: "vertical",
    },
    {
      Id: 3,
      ImageFileName: "https://i.imgur.com/OW6RvR7.jpg",
      Classs: "big",
    },
    {
      Id: 4,
      ImageFileName: "https://i.imgur.com/xqHgVR1.jpg",
      Classs: "horizontal",
    },
    {
      Id: 5,
      ImageFileName: "https://i.imgur.com/cbsaJUI.jpg",
      Classs: "vertical",
    },
    {
      Id: 6,
      ImageFileName: "https://i.imgur.com/xu7bipt.jpg",
      Classs: "vertical",
    },
    {
      Id: 7,
      ImageFileName: "https://i.imgur.com/IeMmLiC.jpg",
      Classs: "vertical",
    },
    {
      Id: 8,
      ImageFileName: "https://i.imgur.com/ZBVETIB.jpg",
      Classs: "horizontal",
    },
    {
      Id: 9,
      ImageFileName: "https://i.imgur.com/hce3kje.jpg",
      Classs: "big",
    },
    {
      Id: 10,
      ImageFileName: "https://i.imgur.com/ARC59lG.jpg",
      Classs: "big",
    },
    {
      Id: 11,
      ImageFileName: "https://i.imgur.com/xxMJ76x.jpg",
      Classs: "horizontal",
    },
    {
      Id: 12,
      ImageFileName: "https://i.imgur.com/jq8B2Cc.jpg",
      Classs: "vertical",
    },
    {
      Id: 13,
      ImageFileName: "https://i.imgur.com/3PguNPG.jpg",
      Classs: "horizontal",
    },,
    {
      Id: 14,
      ImageFileName: "https://i.imgur.com/wRhOTUB.jpg",
      Classs: "vertical",
    },
    {
      Id: 15,
      ImageFileName: "https://i.imgur.com/ivMUu5x.jpg",
      Classs: "big",
    },
    {
      Id: 16,
      ImageFileName: "https://i.imgur.com/2AzhTjW.png",
      Classs: "vertical",
    },
  ],
};
const ImageCard = (props) => {
  return (
    <a
        href={`${props.item.ImageFileName}`}
        data-lightbox="homePortfolio"
        className={props.item.Classs}>
        <img src={`${props.item.ImageFileName}`} />
      </a>
  );
};

// export default ImageCard;

const Images = () => {
  return ImgCardData.row1.map((item) => {
    return <ImageCard key={item.Id} item={item} />;
  });
};

export default Images;
