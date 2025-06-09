'use client';
import React, { useState } from 'react';
import FormField from '../form-field';
import { ICreateProfile } from '@/interface/profile.interface';
import { useProfileActions } from '@/actions/profile';
import { useNotify } from '@/hooks/useNotify';
import { useRouter } from 'next/navigation';


const ProfileForm: React.FC = () => {
  const { createAccount,getProfile} = useProfileActions();
    
  const { notify } = useNotify();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ICreateProfile>({
    firstName: '',
    lastName: '',
    country: '',
    stateOfResidence: '',
    email: '',
    githubLink: '',
  });

  const allFieldsFilled = Object.values(formData).every(
    (val) =>
      typeof val === 'string' ? val.trim() !== '' : val !== null && val !== undefined
  );
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return; // prevent duplicate submits
    setLoading(true); // ⏳ show spinner on button
    const response = await createAccount(formData);
    await getProfile();

    if (response) {
      notify.success('Your account was created successfully.');
      router.push('/developers'); // ✅ navigate on success
    }
  }


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
        <FormField
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          allFieldsFilled={allFieldsFilled}
          loading={loading}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

export default ProfileForm;
