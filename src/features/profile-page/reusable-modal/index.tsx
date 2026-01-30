'use client';
import React from 'react';
import { BackgroundOverlay } from '../../../components/background-overlay';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="md:fixed md:inset-0 z-50  bg-black/50 w-full h-full">
      <BackgroundOverlay
        onClose={onClose}
        wrapperStyle={{
          inset: 0,
        }}
      >
        <div className="bg-white rounded-[32px] min-h-screen md:h-auto p-1 md:p-2 shadow-lg max-w-lg w-full relative md:ml-auto md:mr-[80px] md:my-auto md:min-h-[95vh] ">
          <button
            onClick={onClose}
            className="absolute top-10 right-8 font-bold cursor-pointer text-[20px] text-white hover:text-black md:hidden z-10"
          >
            ✕
          </button>
          {children}
        </div>
      </BackgroundOverlay>
    </div>
  );
};

export default Modal;
