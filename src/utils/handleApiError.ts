import { AxiosError } from 'axios';
import { ApiResponse } from '../types/apiResponse';

export const handleApiError = (error: unknown, defaultMessage: string = 'Something went wrong'): string => {
  if (error instanceof AxiosError) {
    // Handle API error response
    const errorResponse = error.response?.data as ApiResponse;
    if (errorResponse?.message) {
      return errorResponse.message;
    }

    // Handle network errors
    if (error.message === 'Network Error') {
      return 'Please check your internet connection';
    }
  }

  // If error is a string, return it directly
  if (typeof error === 'string') {
    return error;
  }

  // Default error message
  return defaultMessage;
}; 