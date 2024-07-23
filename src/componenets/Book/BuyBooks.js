import {
  Button,
  FormLabel,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";

const BuyBooks = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <form>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={8}
      >
        <FormLabel>Name</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="name" />
        <FormLabel>Address</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="author" />
        <FormLabel>Description</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Pieces</FormLabel>
        <TextField
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />

        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Payment Method</FormLabel>
          <RadioGroup
            aria-label="payment-method"
            name="payment-method"
            value={paymentMethod}
            onChange={handlePaymentChange}
          >
            <FormControlLabel
              value="card"
              control={<Radio />}
              label="By Card"
            />
            <FormControlLabel
              value="cash"
              control={<Radio />}
              label="By Cash"
            />
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="By PayPal"
            />
            <FormControlLabel
              value="bank-transfer"
              control={<Radio />}
              label="By Bank Transfer"
            />
            <FormControlLabel
              value="crypto"
              control={<Radio />}
              label="By Cryptocurrency"
            />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" type="submit">
          BUY BOOK
        </Button>
      </Box>
    </form>
  );
};

export default BuyBooks;
