"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import products, { ProductCategory } from "@/utils/product";
import { CardProduct } from "../shared/CardProduct";

export function Product() {
  const categories: ProductCategory[] = ["Xonçalar", "Gül", "Şokolad"];

  const allProducts = products;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="Hamısı" className="w-full">
          <TabsList className="w-full md:w-[60%] flex justify-start items-center gap-4 md:gap-8 bg-transparent border-b border-gray-200 rounded-none p-0 h-auto mb-12 overflow-x-auto">
            <TabsTrigger
              value="Hamısı"
              className="group bg-transparent rounded-none border-b-2 border-transparent pb-4 px-2
                               text-sm md:text-base font-medium text-gray-500 
                               data-[state=active]:text-gray-900 data-[state=active]:border-b-blue-600 
                               data-[state=active]:shadow-none
                               hover:text-gray-900 transition-colors duration-200 whitespace-nowrap"
            >
              <span className="flex items-center gap-2">
                Hamısı
                <span
                  className="items-center justify-center min-w-[20px] h-5 px-1.5 
                               text-xs font-semibold rounded
                               bg-gray-200 text-gray-700 
                               hidden 
                               group-data-[state=active]:bg-blue-600 
                               group-data-[state=active]:text-white
                               group-data-[state=active]:inline-flex"
                >
                  {allProducts.length}
                </span>
              </span>
            </TabsTrigger>

            {categories.map((category) => {
              const categoryCount = products.filter(
                (p) => p.category === category
              ).length;

              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="group bg-transparent rounded-none border-b-2 border-transparent pb-4 px-2
                                   text-sm md:text-base font-medium text-gray-500 
                                   data-[state=active]:text-gray-900 data-[state=active]:border-b-blue-600 
                                   data-[state=active]:shadow-none
                                   hover:text-gray-900 transition-colors duration-200 whitespace-nowrap"
                >
                  <span className="flex items-center gap-2">
                    {category}
                    <span
                      className="items-center justify-center min-w-[20px] h-5 px-1.5 
                                   text-xs font-semibold rounded
                                   bg-gray-200 text-gray-700 
                                   hidden 
                                   group-data-[state=active]:bg-blue-600 
                                   group-data-[state=active]:text-white
                                   group-data-[state=active]:inline-flex"
                    >
                      {categoryCount}
                    </span>
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="Hamısı" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allProducts.map((product) => (
                <CardProduct key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((p) => p.category === category)
                  .map((product) => (
                    <CardProduct key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}