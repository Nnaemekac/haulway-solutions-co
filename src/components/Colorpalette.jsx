import { SketchPicker, BlockPicker } from "react-color";
import { useState, useEffect } from "react";

export default function Colorpalette() {
  const storedColor = localStorage.getItem("blockPickerColor");
  const [blockPickerColor, setBlockPickerColor] = useState(
    storedColor || "#37d67a"
  );

  useEffect(() => {
    var root = document.documentElement;
    var style = getComputedStyle(root);
    var color = style.getPropertyValue('--secondary');
    console.log(color); // #336699
    // Save the selected color to local storage
    localStorage.setItem("blockPickerColor", blockPickerColor);
    root.style.setProperty('--secondary', `${blockPickerColor}`);

    // const secondaryElements = document.querySelectorAll(".secondary");
    // const secondarySVG = document.querySelectorAll(".offer svg");
    // const secondarySVGPolygon = document.querySelectorAll(".offer svg polygon, .offer svg path");
    // const swiperBullet = document.querySelectorAll(".swiper-pagination .swiper-pagination-bullet");
    // secondaryElements.forEach((element) => {
    //   element.style.backgroundColor = blockPickerColor;
    // });
    // secondarySVG.forEach((elementsvg) => {
    //   elementsvg.style.fill = blockPickerColor;
    // });
    // secondarySVGPolygon.forEach((elementsvgpolygon) => {
    //   elementsvgpolygon.style.stroke = blockPickerColor;
    // });
    // swiperBullet.forEach((elementbullet) => {
    //   elementbullet.style.backgroundColor = blockPickerColor;
    // });
  }, [blockPickerColor]);

  const changeColor = (color) => {
    setBlockPickerColor(color);
  };

  return (
    // <div
    //   className="App"
    //   style={{ display: "flex", justifyContent: "space-around" }}
    // >
    //   <div className="blockpicker">
    //     <h6>Color Picker</h6>
    //     <div
    //       className="secondary" // Add the class directly to the div
    //       style={{
    //         backgroundColor: `${blockPickerColor}`,
    //         width: 100,
    //         height: 50,
    //         border: "2px solid white",
    //       }}
    //     ></div>
        
    //   </div>
    // </div>
    <BlockPicker
          color={blockPickerColor}
          onChange={(color) => {
            changeColor(color.hex);
          }}
        />
  );
}
