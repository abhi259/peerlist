'use client';

import { DraggableFields } from '@/app/components/DraggableFields';
import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleCreateForm = () => {
    router.push('/create-form');
  };

  const handlePublishedForms = () => {
    router.push('/published-forms');
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4 ">
      <div className="flex flex-col gap-3 p-20 border-2 border-gray-200 rounded-2xl hover:bg-gray-100 transition duration-500">
        <button
          onClick={handleCreateForm}
          className="bg-cyan-700 text-white px-10 py-2 rounded-2xl font-semibold hover:scale-110 transition delay-100 duration-500 "
        >
          Create Form
        </button>
        <button
          onClick={handlePublishedForms}
          className="bg-cyan-700 text-white px-10 py-2 rounded-2xl font-semibold hover:scale-110 transition delay-100 duration-500"
        >
          Published Forms
        </button>
      </div>
    </div>
  );
}
