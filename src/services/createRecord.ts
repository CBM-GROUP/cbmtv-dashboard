import axios from 'axios';
import apiClient from './api';
import { CreationJournal, CREATIONS_CHANGED, persistCreation } from '../lib/creation-operation';

export function creationJournal() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  if (!user?.id) throw new Error('Sign in before saving.');
  return new CreationJournal(localStorage, String(user.id));
}

export async function createRecord<T>(endpoint: string, data: object, operationKey: string): Promise<T> {
  const journal = creationJournal();
  try {
    return await persistCreation(journal, apiClient, operationKey, endpoint, data as Record<string, unknown>) as T;
  } catch (error) {
    // Validation fails before commit on the keyed backend. Permit corrected
    // input using this same operation, while retaining every uncertain outcome.
    if (axios.isAxiosError(error) && error.response?.status === 400) journal.complete(operationKey);
    throw error;
  } finally {
    window.dispatchEvent(new Event(CREATIONS_CHANGED));
  }
}
