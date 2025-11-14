import type { FormEvent, ChangeEvent } from "react";

import { useState } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import { useRouter } from "@/hooks";

import { Iconify } from "src/components/iconify";

import { useAuth } from "src/features/auth/context";

// ----------------------------------------------------------------------

export function SignUpView() {
  const { register } = useAuth()!;
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    location: "",
    country: "",
    role: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    await register(formData);
    router.push("/sign-in");
  };
  const renderForm = (
    <form onSubmit={handleSignUp}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <TextField name="email" label="Email address" onChange={handleChange} />
        <TextField name="name" label="Full name" onChange={handleChange} />
        <TextField name="phone" label="Phone number" onChange={handleChange} />
        <TextField name="location" label="Location" onChange={handleChange} />
        <TextField name="country" label="Country" onChange={handleChange} />
        <TextField name="role" label="Role" onChange={handleChange} />
        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={
                      showPassword ? "solar:eye-bold" : "solar:eye-closed-bold"
                    }
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          size="large"
          type="submit"
          color="inherit"
          variant="contained"
        >
          Sign up
        </Button>
      </Box>
    </form>
  );

  return (
    <>
      <Box
        sx={{
          gap: 1.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Typography variant="h5">Sign up</Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
          }}
        >
          Already have an account?
          <Link href="/sign-in" variant="subtitle2" sx={{ ml: 0.5 }}>
            Sign in
          </Link>
        </Typography>
      </Box>
      {renderForm}
    </>
  );
}
