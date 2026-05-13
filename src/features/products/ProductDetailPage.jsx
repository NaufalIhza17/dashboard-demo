import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import formatCurrency from "../../utils/formatCurrency";
import { getProductById, deleteProduct } from "./api";
import useProductStore from "./store";
import toast from "react-hot-toast";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const { product, setProduct } = useProductStore();

  useEffect(() => {
    getProductById(id)
      .then(setProduct)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id, setProduct]);

  const handleDelete = async () => {
    if (!window.confirm("Delete this product?")) return;
    try {
      setDeleting(true);
      await deleteProduct(id);
      toast.success("Product deleted successfully");
      navigate("/products");
    } catch {
      toast.error("Failed to delete product");
      console.error("Delete failed");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-72 bg-gray-100 rounded-xl animate-pulse" />
        <div className="h-6 w-48 bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
      </div>
    );
  }

  if (!product) {
    return (
      <p className="text-sm text-gray-400 py-10 text-center">
        Product not found.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      <Link
        to="/products"
        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        {"<"} Back to products
      </Link>

      <div className="bg-white rounded-xl border overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-cover"
          lazy="loading"
        />
        <div className="p-6">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed">
            {product.description}
          </p>

          <div className="flex gap-8 mt-5">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Price</p>
              <p className="font-bold text-gray-900">
                {formatCurrency(product.price)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Rating</p>
              <p className="font-bold text-gray-900">{product.rating} / 5</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Stock</p>
              <p className="font-bold text-gray-900">{product.stock} units</p>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Link
              to={`/products/edit/${product.id}`}
              className="bg-gray-900 text-white text-sm px-4 py-2.5 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="text-sm px-4 py-2.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50"
            >
              {deleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
