'use client'

import { redirect } from "next/navigation";
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
      if(true){
        return redirect('/home')
      };
  }, []);

  return (
    <>
    <h1>
      hi
    </h1>
    </>
  )
}
