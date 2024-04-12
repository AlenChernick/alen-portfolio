import { useState } from 'react';

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

  const showAlert = ({
    isShow,
    text,
    type = 'danger',
  }: {
    isShow: boolean;
    text: string;
    type: string;
  }) => setAlert({ show: isShow, text, type });

  const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
