import React from "react";
import Select, { components } from "react-select";
import { Box, Flex, Heading, Image } from "rebass";
import data from "./Data/Bank_data.json";
import green_tick from "./Images/green-tick.png";

const CustomSingleValue = ({
  cx,
  getStyles,
  selectProps,
  data,
  isDisabled,
  className,
  ...props
}) => {
  const { sortCode, accountName, accountNumber, accountType } = data.value;
  return (
    <div>
      <div>{`${sortCode}    ${accountNumber}`}</div>
      <div>{`${accountType}-${accountName}`}</div>
    </div>
  );
};

const options = data.map((customer) => {
  const { sortCode, accountNumber, accountType, accountName } = customer;
  return {
    value: customer,
    label: `${sortCode} ${accountNumber} ${accountType} ${accountName} `,
  };
});

const CustomOption = (props) => {
  console.log(props.label);
  return props.isSelected ? (
    <div>
      <label>{props.label}</label>
      <Image
        src={green_tick}
        sx={{
          width: ["2%"],
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
        <Box ml={3} p={3} width={1 / 2} color="black" bg="primary">
          <Heading fontSize={40} color="black" textAlign="center">
            Select Account
          </Heading>
          <br />
          <Select
            components={{
              Option: CustomOption,
              SingleValue: CustomSingleValue,
            }}
            options={options}
            onChange={(e) => {
              console.log(e.value);
              // console.log(selectedAccount);
            }}
          ></Select>
        </Box>
      </Flex>
    </>
  );
};

export default DropDown;
