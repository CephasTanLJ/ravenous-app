import React, {useState, useEffect} from 'react'
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';

//temporary
import { dummyData } from "@/database/dummyData";

function Home() {
  // console.log(dummyData);

  return (
    <main className='flex flex-col justify-between h-[1000px]'>
      <Header />
      <Body />
      <Footer />
    </main>
  );
}

export default Home;
