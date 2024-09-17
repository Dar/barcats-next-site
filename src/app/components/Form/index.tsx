'use client'
import React, { useState } from "react";
import { TextField, Button, Box, CircularProgress, Alert } from "@mui/material";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Email is not valid";
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const clearError = (field: string) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    
    if (!validateForm()) {
      return;
    }

    setLoading(true); 

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message, honeypot }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccessMessage("Email sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setErrorMessage("Failed to send email. Please try again.");
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (e.target.value.trim()) {
              clearError("name");
            }
          }}
          error={!!errors.name}
          helperText={errors.name}
          sx={{ mb: 2 }}
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (!e.target.value.trim()) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Email is required",
              }));
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Email is not valid",
              }));
            } else {
              clearError("email");
            }
          }}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />
        <TextField
          required
          fullWidth
          id="message"
          label="Message"
          name="message"
          multiline
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (e.target.value.trim()) {
              clearError("message");
            }
          }}
          error={!!errors.message}
          helperText={errors.message}
          sx={{ mb: 2 }}
        />
        <TextField
          type="text"
          id="honeypot"
          name="honeypot"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          sx={{ display: "none" }}
        />
        <Box sx={{ position: "relative", mt: 2 }}>
          <Button type="submit" fullWidth variant="contained" color="primary" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Send Message"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
