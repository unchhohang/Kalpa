import chroma from "chroma-js";
import React from "react";
import Select from "react-select";

export default function SelectProductInput(props) {
  // list of products

  //

  // Options for Select value is productStock id with label as productStockName
  const options = props.productStock.map((x, index) => {
    return {
      value: x.productStockId,
      label: x.productName,
    };
  });

  // For the sake of thou custom styles
  const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",
    width: "200%",

    ":before": {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: "block",
      marginRight: 0,
      height: 10,
    },
  });

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),

    input: (styles) => ({ ...styles, ...dot() }),
  };

  return (
    <div>
      <Select
        options={options}
        styles={colourStyles}
        onChange={(e) => {
          console.log(e.value);
          props.handleOrder(e.value);
        }}
      />
    </div>
  );
}
