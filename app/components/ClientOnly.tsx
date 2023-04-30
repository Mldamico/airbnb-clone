'use client';
import React, { useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
}

const ClientOnly = ({children}: ClientOnlyProps) => {
  const [hasMounted, setHastMounted] = useState(false);
  useEffect(()=>{
    setHastMounted(true)
  },[])

  if(!hasMounted){
    return null;
  }
  return (
    <>{children}</>
  )
}

export default ClientOnly