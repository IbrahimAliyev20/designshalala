import { Product } from "@/components/home/Product";
import Image from "next/image";
import React from "react";

function ProductsListingPage() {
  return (

    <div >
         <section className="relative h-[300px] md:h-[400px] flex items-center justify-center pt-20">
             <Image
               src="/images/ctabg.png"
               alt="Haqqımızda arxa fon"
                width={1000}
                height={400}
               className="absolute object-cover inset-0 z-0 opacity-40 h-full w-full"
             />
             <div className="absolute inset-0 bg-black/30 z-10" />
     
             <div className="relative z-20 text-center text-white p-4">
               <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                 Sizin Xüsusi Gününüz Üçün
               </h1>
               <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                 Nişan, toy və ya zərif bir hədiyyə üçün ən unikal seçimlər burada.
               </p>
             </div>
           </section>
      <Product />
    </div>
  );
}

export default ProductsListingPage;