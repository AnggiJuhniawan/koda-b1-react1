function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex h-40 items-center justify-center bg-blue-100">
        <span className="text-6xl">Gambar</span>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500">{product.category}</p>

        <h1 className="mt-2 text-lg font-bold text-gray-800">{product.name}</h1>
        <p className="mt-3 ">Rp {product.price.toLocaleString("id-ID")}</p>

        <button
          type="button"
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(product.id)}
          className={`mt-4 w-full rounded-lg px-4 py-2 font-medium transition ${isFavorite ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
        >
          {isFavorite ? "Favorit" : "Tambah Favorit"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
