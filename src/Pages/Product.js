/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line array-callback-return
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, products } from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";

function Product({ addToCart }) {
  const { productId } = useParams();
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[17.8%] w-full">
            {productData.image.map((item, index) => {
              return (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt=""
                />
              );
            })}
          </div>

          <div className="w-full sm:w-[76%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-1 ">{productData.name}</h1>
          <div className="flex  items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className=" mt-5 text-[1.2rem] font-medium">
            {productData.currency} {productData.price}
          </p>
          <p className="mt-3 text-[1.1rem] text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-4">
            <p>Select Size</p>
            <div className="flex gap-2 mt-1 ">
              {productData.sizes.map((item, index) => {
                return (
                  <button
                    onClick={() => {
                      setSize(item);
                    }}
                    className={`border py-2 px-4 bg-gray-100  ${
                      item === size ? "border-orange-500" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className=" mt-3 bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8  sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description and Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <b className="border px-5 py-3 text-sm">Review (122)</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products and services over the internet. It
            serves as a virtual marketplace where buisness and individuals can
            showcase their products, interect with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            acessibility, and the global reach they offer
          </p>
          <p>
            E-commerce websites typically display produts or services along with
            detailed description, images, prices and available variations (e.g.,
            sizes, colors). Each product usually has its own dedicated page with
            relevant information
          </p>
        </div>
      </div>

      {/* Display related products */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;