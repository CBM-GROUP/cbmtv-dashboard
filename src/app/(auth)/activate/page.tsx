'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { dashboardAccessService } from '@/services/dashboardAccessService';

export default function ActivatePage() {
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [complete, setComplete] = useState(false);
  const [busy, setBusy] = useState(false);

  const activate = async (event: FormEvent) => {
    event.preventDefault();
    if (password !== confirm) {
      setMessage('Passwords do not match.');
      return;
    }
    setBusy(true);
    setMessage('');
    try {
      await dashboardAccessService.activate(email.trim(), pin, password);
      setComplete(true);
      setPin('');
      setPassword('');
      setConfirm('');
      setMessage('Password created. You can now sign in.');
    } catch (error) {
      const data = axios.isAxiosError(error) ? error.response?.data : null;
      setMessage(data?.new_password?.[0] || data?.detail || 'Activation failed. Check your PIN or ask an admin to resend it.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Activate your dashboard account</CardTitle>
          <CardDescription>Use the temporary PIN in your invitation email, then choose your own password.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5">
          {message && <p role="status" className="rounded-lg border p-3 text-sm">{message}</p>}
          {!complete && (
            <form onSubmit={activate}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="activate-email">Email</FieldLabel>
                  <Input id="activate-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="activate-pin">Temporary PIN</FieldLabel>
                  <Input id="activate-pin" autoComplete="one-time-code" value={pin} onChange={(event) => setPin(event.target.value)} required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="activate-password">New password</FieldLabel>
                  <Input id="activate-password" type="password" autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="activate-confirm">Confirm password</FieldLabel>
                  <Input id="activate-confirm" type="password" autoComplete="new-password" value={confirm} onChange={(event) => setConfirm(event.target.value)} required />
                </Field>
                <Button type="submit" disabled={busy}>{busy ? 'Activating…' : 'Create password'}</Button>
              </FieldGroup>
            </form>
          )}
          <Link href="/sign-in" className="text-sm text-primary underline underline-offset-4">Back to sign in</Link>
        </CardContent>
      </Card>
    </div>
  );
}
