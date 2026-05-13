import { useState, useEffect } from "react";

const defaultForm = {
  title: "",
  price: "",
  category: "",
  description: "",
  thumbnail: "",
};

export default function ProductForm({
  initialValues,
  onSubmit,
  loading,
  submitText = "Submit",
}) {
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    if (initialValues) setForm(initialValues);
  }, [initialValues]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent mt-1";
  const labelClass = "block text-sm font-medium text-gray-700";

  return (
    <div className="bg-white rounded-xl border p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={labelClass}>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Price (USD)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Category</label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Thumbnail URL</label>
          <input
            type="text"
            name="thumbnail"
            value={form.thumbnail}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Description</label>
          <textarea
            rows={4}
            name="description"
            value={form.description}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-700 text-white text-sm py-2.5 rounded-lg hover:bg-green-500 transition-colors disabled:opacity-50"
        >
          {loading ? "Saving..." : submitText}
        </button>
      </form>
    </div>
  );
}
