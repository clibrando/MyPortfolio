// import { render } from "react-dom";
import React, { useRef } from "react";
//import clamp from "lodash-es/clamp";
// import { useSprings, animated } from "react-spring";
// import { useGesture } from "react-use-gesture";
//import { useGesture } from "@use-gesture/react";
// import "./styles.css";
import Images from "../Components/Images";

const pages = [
  "https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const ImgCardData = {
  row1: [
    {
      Id: 1,
      ImageFileName: "https://source.unsplash.com/600x600/?sig=1",
      Classs: "",
    },
    // {
    //   Id: 10,
    //   ImageFileName: "",
    //   Classs: "",
    // },
  ],
};
const Content = () => {
  return (
    <div className="hello m-8 justify-center items-center">
      {/* <div class="typewriter">
        <h1>This is how it should be.</h1>
      </div> */}

      <div class="html">
        <div class="body">
          <div class="container">
            {/* {ImgCardData.row1.map((item) => {
              return <ImageCard key={item.Id} item={item} />;
            })} */}
            <Images />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
