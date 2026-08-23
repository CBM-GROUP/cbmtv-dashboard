import axios from 'axios';

/**
 * Turn an axios failure into something worth showing a user.
 *
 * An AxiosError's own `message` is only ever "Request failed with status code
 * 400" — the part that says *why* lives in `response.data`, which DRF shapes
 * one of three ways:
 *
 *   {"detail": "Not found."}                          - APIException / permissions
 *   {"name": ["channel with this name already exists."]} - serializer field errors
 *   {"non_field_errors": ["..."]}                     - serializer-level validators
 *
 * A 500 has no JSON body at all (Django returns an HTML error page), so callers
 * get a generic line rather than a dump of markup.
 */
export function getApiErrorMessage(error: unknown, fallback = 'Something went wrong'): string {
  if (!axios.isAxiosError(error)) {
    return error instanceof Error ? error.message : fallback;
  }

  if (!error.response) {
    return 'Could not reach the server. Check your connection and try again.';
  }

  const { status, data } = error.response;

  if (status >= 500) {
    return `Server error (${status}). The API could not handle the request — check the backend logs.`;
  }

  if (typeof data === 'string' && data.trim() && !data.trimStart().startsWith('<')) {
    return data;
  }

  if (data && typeof data === 'object') {
    const record = data as Record<string, unknown>;

    if (typeof record.detail === 'string') {
      return record.detail;
    }

    const fieldErrors = Object.entries(record)
      .map(([field, messages]) => {
        const text = Array.isArray(messages) ? messages.join(' ') : String(messages);
        return field === 'non_field_errors' ? text : `${field}: ${text}`;
      })
      .filter(Boolean);

    if (fieldErrors.length) {
      return fieldErrors.join('\n');
    }
  }

  return `${fallback} (${status})`;
}
