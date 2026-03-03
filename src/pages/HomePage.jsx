import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  return (
    <div>
      <SearchBar />
      {query != "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
