/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { assets, products } from "../assets/assets";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";

function Collection({ showSearch, search }) {
  const [showfilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Filters of Products

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );

      setFilterProduct(productsCopy);
    }
  };

  const applyFilter2 = () => {
    let productsCopy = products.slice();

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subcategory.includes(item.subCategory)
      );

      setFilterProduct(productsCopy);
    }
  };

  const applyFilterSearch = () => {
    let productsCopy = products.slice();

    if (search && showSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilterProduct(productsCopy);
  };

  useEffect(() => {
    applyFilter();
    applyFilter2();
  }, [category, subcategory, showSearch, search]);

  useEffect(() => {
    setFilterProduct(products);
    applyFilterSearch();
  }, [search, showSearch]);

  // Product Sort

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProduct(products);
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-top">
      {/* Filtet Option */}

      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showfilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showfilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => {
            return (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                currency={item.currency}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Collection;