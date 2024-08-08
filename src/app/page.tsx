import React from 'react'
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';

import BusinessContainer from '@/Container/BusinessContainer';

//temporary
import { dummyData } from "@/database/dummyData";

function Home() {

  return (
    <main className='flex flex-col'>
      <Header />
      <Body />
      <Footer />
    </main>
  );
}

export default Home;
