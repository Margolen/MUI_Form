import React, { useReducer } from "react";
import { Button, TextField, Paper, Typography } from "@mui/material";

export function Form(props) {
    const [formInput, setFormInput] = useReducer(
      (state, newState) => ({ ...state, ...newState }),
      {
        name: "",
        email: ""
      }
    );
  
    const handleSubmit = evt => {
      evt.preventDefault();
    };
  
    const handleInput = evt => {
      const name = evt.target.name;
      const newValue = evt.target.value;
      setFormInput({ [name]: newValue });
    };
  
    return (
      <div>
        <Paper>
          <Typography variant="h5" component="h3">
            {props.formName}
          </Typography>
          <Typography component="p">{props.formDescription}</Typography>
  
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              id="margin-normal"
              name="name"
              defaultValue={formInput.email}
              helperText="Enter your full name"
              onChange={handleInput}
            />
            <TextField
              label="Email"
              id="margin-normal"
              name="email"
              defaultValue={formInput.name}
              helperText="e.g. name@gmail.com"
              onChange={handleInput}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Subscribe
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
  