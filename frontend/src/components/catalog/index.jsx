import React, { useContext } from "react";
import { Header } from "./Header";
import { MainBooks } from "./Main";
import { CatalogContext } from "../../context/CatalogContext";
import { GoogleBooks } from "../../pages/googleBooks";
import { TabPages } from "./tabPages";

export const CatalogBooks = () => {
  const { activeTab } = useContext(CatalogContext);

  return (
    <div>
      <Header />
      <div>
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gradient pt-10 py-2 tracking-wider">Catálogo de livros</h1>
          <p className="text-gray-500">Explore nossa coleção local e milhões de títulos do Google Books</p>
        </div>
        <TabPages />
        {activeTab === 'biblioteca' && <MainBooks />}
        {activeTab === 'google' && <GoogleBooks />}
      </div>

    </div>
  )
};
