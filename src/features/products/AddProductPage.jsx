import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import { addProduct } from "./api";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddProduct = async (formData) => {
    setLoading(true);
    setError("");
    try {
      await addProduct(formData);
      toast.success("Product created successfully");
      navigate("/products");
    } catch {
      setError("Something went wrong. Please try again.");
      toast.error("Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <Link
          to="/products"
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          {"<"} Back to products
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-3">New product</h1>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <div className="max-w-xl">
        <ProductForm
          onSubmit={handleAddProduct}
          loading={loading}
          submitText="Create product"
        />
      </div>
    </div>
  );
}
