'use client';

import { DraggableFields } from '@/app/components/DraggableFields';
import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-00 ">
      <Header />
      <DraggableFields />
      <Footer />
    </div>
  );
}
