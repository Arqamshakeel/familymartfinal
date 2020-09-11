import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

const CustomCarousel = (props) => {
  var items = [
    {
      name: "front.jpeg",
      description: "Probably the most random thing you have ever seen!",
      image: "./Carousel.js",
    },
    {
      name: "racks.jpeg",
      description: "Hello World!",
      image: "./Carousel.js",
    },
  ];

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <Carousel>
      {items.map((item, i) => (
        <img
          src={require("./" + item.name)}
          style={{ width: "100%", height: isDesktopOrLaptop ? 450 : 250 }}
          key={i}
        />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper>
      <img src="./test.jpg" alt="" />
    </Paper>
  );
}

export default CustomCarousel;
