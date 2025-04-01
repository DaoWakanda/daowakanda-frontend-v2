'use client';
import React, { useState } from 'react';
import FormField from '../form-field';
import { ICreateProfile } from '@/interface/profile.interface';

const ProfileForm: React.FC = () => {
  const [formData, setFormData] = useState<ICreateProfile>({
    firstName: '',
    lastName: '',
    country: '',
    state: '',
    email: '',
    github: '',
    wallet: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="rounded-[30px] p-8 shadow-lg backdrop-blur-sm bg-[#1F2431] w-full  mx-auto mb-[50px] flex flex-col md:gap-3">
      <div>
        <div className="hidden lg:flex">
          <h1 className="text-[42px] mb-2 font-extrabold  text-[#C5EE4F] font-avenir">
            Complete your profile
          </h1>
        </div>
        <div className="flex lg:hidden flex-col mb-8 text-center justify-center">
          <div className="w-6 h-6  rounded mb-2 mx-auto md:hidden">
            <img
              src="https://res.cloudinary.com/dlinprg6k/image/upload/v1730052651/Group_5_1_nmdiwy.png"
              alt=""
            />
          </div>
          <h1 className="text-[24px] mb-1 font-bold text-[#C5EE4F] font-avenir">
            Let's Know Who You Are.
          </h1>
          <p className="text-center text-sm text-gray-300">
            Complete KYC and tell community members about you.
          </p>
        </div>
      </div>
      <div>
        <FormField formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ProfileForm;
