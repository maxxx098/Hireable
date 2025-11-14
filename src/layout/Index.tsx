import React from "react";
import Header from '@/layout/Header'
import Footer from "@/layout/Footer";

interface IndexProps {
  children: React.ReactNode;
}

const Index: React.FC<IndexProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Index;
