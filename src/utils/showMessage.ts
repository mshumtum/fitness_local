import { showMessage, MessageType } from 'react-native-flash-message';

interface ShowMessageProps {
  message: string;
  description?: string;
  type?: MessageType;
}

export const showErrorMessage = (message: string, description?: string) => {
  showMessage({
    message,
    description,
    type: 'danger',
    icon: 'danger',
    duration: 3000,
    statusBarHeight: 20,
    floating: true,
  });
};

export const showSuccessMessage = (message: string, description?: string) => {
  showMessage({
    message,
    description,
    type: 'success',
    icon: 'success',
    duration: 3000,
    statusBarHeight: 20,
    floating: true,
  });
};

export const showInfoMessage = (message: string, description?: string) => {
  showMessage({
    message,
    description,
    type: 'info',
    icon: 'info',
    duration: 3000,
    statusBarHeight: 20,
    floating: true,
  });
}; 