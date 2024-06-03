import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import products from "./products";

export default function Home() {
  return (
    <>
      <section className="pb-10 px-3 xl:px-0">
        <header className="relative mt-20 w-full">
          {/* background effects */}
          <div className="pointer-events-none absolute inset-x-0 h-full w-full [mask-image:linear-gradient(0deg,transparent,black)]">
            <div className="pattern -ml-2 -mt-1 h-full w-full opacity-80"></div>
          </div>

          <div className="pointer-events-none absolute inset-0 -ml-32 mt-52 flex items-center justify-center">
            <div className="flex rotate-45 items-center justify-center">
              <div className="h-40 w-32 rounded-full bg-[#F72585] opacity-15 blur-[100px] md:w-96"></div>
              <div className="h-64 w-52 rounded-full bg-[#480CA8] opacity-15 blur-[150px] md:w-[32rem]"></div>
            </div>
          </div>
          {/* background effects */}

          <div className="relative w-full max-w-screen-xl mx-auto flex items-center justify-center flex-col">
            <span className="bg-purple-100 rounded-full px-3 py-1 text-center text-xs text-[#560BAD]">
              Explore products
            </span>
            <h1 className="mt-2 text-3xl text-balance text-center font-semibold text-gray-800">
              All Latest products from our store
            </h1>

            <p className="mt-1 max-w-sm text-xs text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              veniam inventore animi?
            </p>

            <Input placeholder="search" className={"mt-10 max-w-sm"} />
          </div>
        </header>

        {/* body */}
        <div className="w-full max-w-screen-xl mx-auto mt-10">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-transparent w-full overflow-x-auto justify-start mb-5">
              <TabsTrigger
                className="data-[state=active]:text-[#3F37C9]"
                value="all"
              >
                All Items
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:text-[#3F37C9]"
                value="women"
              >
                Women
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:text-[#3F37C9]"
                value="men"
              >
                Men
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:text-[#3F37C9]"
                value="kids"
              >
                Kids
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:text-[#3F37C9]"
                value="cosmetics"
              >
                Cosmetics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                {/* card */}
                {Object.values(products)
                  .flat(2)
                  .reverse()
                  .map((product, idx) => (
                    <Card
                      key={idx}
                      title={product.title}
                      description={product.description}
                      amount={product.amount}
                      image={product.image}
                    />
                  ))}
                {/* card */}
              </div>
            </TabsContent>
            <TabsContent value="women">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                {/* card */}
                {products.women.map((product, idx) => (
                  <Card
                    key={idx}
                    title={product.title}
                    description={product.description}
                    amount={product.amount}
                    image={product.image}
                  />
                ))}
                {/* card */}
              </div>
            </TabsContent>
            <TabsContent value="men">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                {/* card */}
                {products.men.map((product, idx) => (
                  <Card
                    key={idx}
                    title={product.title}
                    description={product.description}
                    amount={product.amount}
                    image={product.image}
                  />
                ))}
                {/* card */}
              </div>
            </TabsContent>
            <TabsContent value="kids">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                {/* card */}
                {products.kids.map((product, idx) => (
                  <Card
                    key={idx}
                    title={product.title}
                    description={product.description}
                    amount={product.amount}
                    image={product.image}
                  />
                ))}
                {/* card */}
              </div>
            </TabsContent>
            <TabsContent value="cosmetics">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                {/* card */}
                {products.cosmetics.map((product, idx) => (
                  <Card
                    key={idx}
                    title={product.title}
                    description={product.description}
                    amount={product.amount}
                    image={product.image}
                  />
                ))}
                {/* card */}
              </div>
            </TabsContent>
          </Tabs>

          <Pagination className={"mt-10"}>
            <PaginationContent className="flex-wrap">
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        {/* body */}
      </section>
    </>
  );
}
