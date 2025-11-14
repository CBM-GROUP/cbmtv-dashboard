import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAuth } from 'src/features/auth/context';
import { useState, useEffect } from 'react';
import apiClient from 'src/services/api';
import { ImageUploader } from 'src/components/image-uploader';

export function ProfileView() {
  const { user, fetchUser } = useAuth()!;
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    country: '',
    image: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        location: user.location || '',
        country: user.country || '',
        image: user.image || '',
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (url: string) => {
    setFormData((prevData) => ({ ...prevData, image: url }));
  };

  const handleSubmit = async () => {
    const changedFields: { [key: string]: string } = {};

    for (const key in formData) {
      const formValue = formData[key as keyof typeof formData] || '';
      const userValue = user![key as keyof typeof user] || '';

      if (formValue !== userValue) {
        changedFields[key] = formValue;
      }
    }

    if (Object.keys(changedFields).length > 0) {
      try {
        console.log(changedFields);
        await apiClient.patch(`/api/accounts/users/${user?.id}/`, changedFields);
        fetchUser();
        setIsEditing(false);
      } catch (error) {
        console.error('Failed to update user details', error);
      }
    } else {
      setIsEditing(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Profile
      </Typography>
      {user && (
        <Card>
          <CardContent>
            {isEditing ? (
              <Box
                component="form"
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { sm: 'repeat(2, 1fr)' },
                  gap: 2,
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  name="name"
                  label="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <TextField
                  name="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  name="phone"
                  label="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <TextField
                  name="location"
                  label="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
                <TextField
                  name="country"
                  label="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
                <ImageUploader
                  label="Profile Image"
                  value={formData.image}
                  onUpload={handleImageUpload}
                />
                <Box sx={{ display: 'flex', gap: 2, mt: 2, gridColumn: 'span 2' }}>
                  <Button variant="contained" onClick={handleSubmit}>
                    Save
                  </Button>
                  <Button variant="outlined" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                </Box>
              </Box>
            ) : (
              <>
                <Typography variant="h6">Name: {user.name}</Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography>Phone: {user.phone}</Typography>
                <Typography>Location: {user.location}</Typography>
                <Typography>Country: {user.country}</Typography>
                <Button variant="contained" sx={{ mt: 2 }} onClick={() => setIsEditing(true)}>
                  Edit Profile
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </Box>
  );
}
