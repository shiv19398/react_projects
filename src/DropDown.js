import React from "react";
import Select, { components } from "react-select";
import { Box, Flex, Heading, Image } from "rebass";
import data from "./Data/Bank_data.json";
import green_tick from "./Images/green-tick.png";

const customStyles = {
  option: (provided, state) => {
    return { ...provided, color: state.isSelected ? "red" : "black" };
  },
};

const options = data.map((customer) => {
  return {
    value: customer,
    label: `${customer.sortCode} ${customer.accountNumber} ${customer.accountType} ${customer.accountName} `,
  };
});

const CustomOption = (props) => {
  return props.isSelected ? (
    <div>
      <label>{props.label}</label>
      <Image
        src={green_tick}
        sx={{
          width: ["4%"],
        }}
      ></Image>
    </div>
  ) : (
    <components.Option {...props} />
  );
};

const DropDown = () => {
  return (
    <>
      <Flex>
        <Box p={3} width={1 / 2} color="black" bg="primary">
          <Heading fontSize={40} color="black" textAlign="center">
            Select Account
          </Heading>
          <br />
          <Select
            styles={customStyles}
            components={{ Option: CustomOption }}
            options={options}
            onChange={(e) => {
              console.log(e.value);
            }}
          ></Select>
        </Box>
      </Flex>
    </>
  );
};

export default DropDown;
