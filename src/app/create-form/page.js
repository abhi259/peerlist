'use client';

import { DraggableFields } from '@/app/components/DraggableFields';
import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateForm() {
  return (
    <div className=" relative  flex flex-col items-center justify-start bg-gray-00 max-w-[600px] min-h-dvh m-auto border   ">
      <Header />
      <DraggableFields />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}
