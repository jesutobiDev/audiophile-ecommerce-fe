import { useState } from 'react';

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = (value:boolean) =>{
    setModalOpen(value)
  }

  return { modalOpen, toggleModal };
};

export default useModal;
