export const getErrorMessage = (error: any): string => {
  if (typeof error === 'string') return error;
  
  return error?.response?.data?.message 
    || error?.message 
    || 'Something went wrong. Please try again.';
}; 