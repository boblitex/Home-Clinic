import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Box,
  ButtonGroup
} from "@chakra-ui/core";

const Showdate = () => {
  const initialFocusRef = React.useRef();
  const date = localStorage.getItem("date");
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button>View Appointments</Button>
      </PopoverTrigger>
      <PopoverContent
        zIndex={4}
        color="white"
        bg="blue.800"
        borderColor="blue.800"
      >
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Manage Appointments
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          You have an Appointment on {date}
        </PopoverBody>
        <PopoverFooter
          border="0"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <Box fontSize="sm">app 1 of 1</Box>
          <ButtonGroup size="sm">
            <Button variantColor="red" ref={initialFocusRef}>
              Remove
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default Showdate;
