import { Link } from "react-router-dom";
import formatCurrency from "../../../utils/formatCurrency";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-44 object-cover"
        lazy="loading"
      />
      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h2 className="font-semibold text-gray-900 leading-snug line-clamp-1">
          {product.title}
        </h2>
        <p className="text-gray-400 text-sm mt-1 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-gray-900">
            {formatCurrency(product.price)}
          </span>
          <Link
            to={`/products/${product.id}`}
            className="text-xs bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            View detail
          </Link>
        </div>
      </div>
    </div>
  );
}
