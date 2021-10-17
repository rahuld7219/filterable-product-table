import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import PRODUCTS from "./data";

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div className="filterableProductTable">
                <SearchBar />
                <ProductTable products={PRODUCTS}/>
            </div>
        );
    }
}

export default FilterableProductTable;