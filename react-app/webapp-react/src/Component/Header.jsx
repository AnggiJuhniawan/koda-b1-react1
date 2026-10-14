function Header({ favoriteCount }) {
  return (
    <header className="bg-blue-600 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Koda Store</h1>

          <p className="mt-1 text-sm text-blue-100">
            Temukan produk favorit kamu
          </p>
        </div>

        <div className="w-fit rounded-lg bg-blue-700 px-4 py-2">
          Favorit: {favoriteCount}
        </div>
      </div>
    </header>
  );
}

export default Header;
