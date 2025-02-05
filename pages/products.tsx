import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/layout/Footer";
import Head from "next/head";
import { Dhwani } from "../components/screens/products/Dhwani";
import { Button } from "../components/layout/Button";
import Link from "next/link";
import { DialSense } from "../components/screens/products/DialSense";
interface Props {}

const Products: React.FC<Props> = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>Products | Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      <section className="products-section-bg min-h-screen">
        <div className="mx-auto px-30" style={{ maxWidth: "1200px" }}>
          <h1 className="text-h3 font-semibold text-white mx-auto md:text-center pt-140 mb-180 lg:mb-0 lg:py-90 md:py-80">
            Products
          </h1>
          <Dhwani />
          <div className="flex items-center mt-40 justify-center mb-70">
            <Link href="/products/dhwani">
              <a>
                <Button title="View More" />
              </a>
            </Link>
          </div>
          {/* <DialSense />
          <div className="flex items-center mt-40 justify-center mb-70">
            <Link href="/products/dialsense">
              <a>
                <Button title="View More" />
              </a>
            </Link>
          </div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
