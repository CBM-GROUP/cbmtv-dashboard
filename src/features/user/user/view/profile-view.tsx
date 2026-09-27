import { useState, useEffect } from 'react';
import { PencilIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FormField } from '@/components/form-field';
import { PageHeader, PageShell } from '@/components/page-shell';
import { useAuth } from 'src/features/auth/context';
import apiClient from 'src/services/api';
import { ImageUploader } from 'src/components/image-uploader';

const TEXT_FIELDS = [
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
  { name: 'phone', label: 'Phone' },
  { name: 'location', label: 'Location' },
  { name: 'country', label: 'Country' },
] as const;

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

  const displayName = user?.name || user?.email || 'Account';

  return (
    <PageShell>
      <PageHeader title="Profile" description="Your account details." />
      {user && (
        <Card className="max-w-3xl">
          <CardHeader className="border-b">
            <div className="flex flex-wrap items-center gap-4">
              <Avatar size="lg">
                {user.image && <AvatarImage src={user.image} alt={displayName} />}
                <AvatarFallback>{displayName.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="grid min-w-0 flex-1 gap-1">
                <CardTitle className="flex items-center gap-2">
                  <span className="truncate">{user.name || 'Unnamed user'}</span>
                  {user.role && (
                    <Badge variant="secondary" className="capitalize">
                      {user.role}
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription className="truncate">{user.email}</CardDescription>
              </div>
              {!isEditing && (
                <Button variant="outline" onClick={() => setIsEditing(true)}>
                  <PencilIcon />
                  Edit Profile
                </Button>
              )}
            </div>
          </CardHeader>

          {isEditing ? (
            <>
              <CardContent>
                <form className="grid gap-4 sm:grid-cols-2" noValidate autoComplete="off">
                  {TEXT_FIELDS.map((field) => (
                    <FormField key={field.name} label={field.label} htmlFor={`profile-${field.name}`}>
                      <Input
                        id={`profile-${field.name}`}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                      />
                    </FormField>
                  ))}
                  <div className="sm:col-span-2">
                    <ImageUploader
                      label="Profile Image"
                      value={formData.image}
                      onUpload={handleImageUpload}
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit}>Save</Button>
              </CardFooter>
            </>
          ) : (
            <CardContent>
              <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {TEXT_FIELDS.map((field, index) => (
                  <div key={field.name} className="grid gap-1">
                    {index > 0 && <Separator className="mb-3 sm:hidden" />}
                    <dt className="text-xs font-medium text-muted-foreground">{field.label}</dt>
                    <dd className="truncate">{user[field.name] || '—'}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          )}
        </Card>
      )}
    </PageShell>
  );
}
