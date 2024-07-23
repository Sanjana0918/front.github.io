import React, { useState } from "react";
import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

// Footer Component
const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop={4}
      padding={2}
      bgcolor="lightgrey"
    >
      <Typography variant="h6">Contact Information</Typography>
      <Typography variant="body1">Phone : 9330500266</Typography>
      <Typography variant="body1">
        Email: jaiswalpriyanshu0004@gmail.com
      </Typography>
      <Typography variant="body1">
        Address: WB-743194, Kolkata, India
      </Typography>
    </Box>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://booksstore-7pdl.onrender.com/send",
        formData
      );
      console.log(response.data);
      alert("Message sent successfully");
    } catch (error) {
      console.log("Error sending message", error);
      alert("Failed to send message");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormLabel>Email Address</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormLabel>Message</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
      <Footer />
    </>
  );
};

export default ContactForm;
