import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import SearchProduct from "./components/SearchProduct";
import { getProducts } from "./api";
import useProductStore from "./store";

export default function ProductPage() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [setProducts]);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-sm text-gray-400">{products.length} items</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <SearchProduct search={search} setSearch={setSearch} />
          <Link
            to="/products/add"
            className="bg-gray-900 text-white text-sm px-4 py-2.5 rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap flex items-center justify-center"
          >
            + Add Product
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl h-48 animate-pulse border"
            />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-sm text-gray-400 py-10 text-center">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
