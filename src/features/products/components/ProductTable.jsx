import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import formatCurrency from "../../../utils/formatCurrency";

const PER_PAGE = 10;

export default function ProductTable({ products }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / PER_PAGE);

  const rows = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return products.slice(start, start + PER_PAGE);
  }, [products, page]);

  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="text-left px-4 py-3 text-gray-500 font-medium">
              Title
            </th>
            <th className="text-left px-4 py-3 text-gray-500 font-medium">
              Price
            </th>
            <th className="text-left px-4 py-3 text-gray-500 font-medium">
              Category
            </th>
            <th className="text-left px-4 py-3 text-gray-500 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((product) => (
            <tr
              key={product.id}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-3 font-medium text-gray-900">
                {product.title}
              </td>
              <td className="px-4 py-3 text-gray-500">
                {formatCurrency(product.price)}
              </td>
              <td className="px-4 py-3 text-gray-500 capitalize">
                {product.category}
              </td>
              <td className="px-4 py-3">
                <Link
                  to={`/products/edit/${product.id}`}
                  className="text-xs text-gray-500 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between px-4 py-3 border-t">
        <p className="text-xs text-gray-400">
          {page} / {totalPages}
        </p>
        <div className="flex gap-1">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="px-3 py-1.5 text-xs border rounded-lg disabled:opacity-40 hover:bg-gray-50 transition-colors"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
            className="px-3 py-1.5 text-xs border rounded-lg disabled:opacity-40 hover:bg-gray-50 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
