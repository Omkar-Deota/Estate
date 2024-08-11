import { Button, TextField } from "@mui/material";
import { useState } from "react";

import { api } from "../api";


const CreateProperty = ({ onPropertyCreated, onClose }:any) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
  });

  const handleChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await api.post("/properties", form);
      onPropertyCreated();
      onClose();
    } catch (error) {
      console.error("Error creating property:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        sx={{padding:"6px"}}
        name="title"
        label="Title"
        type="text"
        value={form.title}
        onChange={handleChange}
        fullWidth
      />
      <TextField
      sx={{padding:"6px"}}
        name="description"
        label="Description"
        value={form.description}
        onChange={handleChange}
        multiline
        rows={1}
        fullWidth
      />
      <TextField
      sx={{padding:"6px"}}
        type="number"
        name="price"
        label="Price"
        value={form.price}
        onChange={handleChange}
        fullWidth
      />
      <TextField
      sx={{padding:"6px"}}
        type="text"
        name="location"
        label="Location"
        value={form.location}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" className="flex">
        Create Property
      </Button>
    </form>
  );
};

export default CreateProperty;
