import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import { getProducts, getProductById, updateProduct } from "./api";
import useProductStore from "./store";
import toast from "react-hot-toast";

export default function EditProductPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { product, setProduct, products, setProducts } = useProductStore();

  useEffect(() => {
    getProductById(id).then(setProduct).catch(console.error);
    getProducts().then(setProducts).catch(console.error);
  }, [id, setProduct, setProducts]);

  const handleUpdate = async (formData) => {
    setLoading(true);
    try {
      await updateProduct(id, {
        title: formData.title,
        price: Number(formData.price),
        category: formData.category,
        description: formData.description,
        thumbnail: formData.thumbnail,
      });
      toast.success("Product updated successfully");
    } catch {
      toast.error("Failed to update product");
      console.error("Update failed");
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
        <h1 className="text-2xl font-bold text-gray-900 mt-3">Edit product</h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-1">
          <ProductForm
            initialValues={product}
            onSubmit={handleUpdate}
            loading={loading}
            submitText="Save changes"
          />
        </div>
        <div className="xl:col-span-2">
          <ProductTable products={products} />
        </div>
      </div>
    </div>
  );
}
