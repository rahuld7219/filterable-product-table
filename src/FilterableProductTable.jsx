import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import PRODUCTS from "./data";

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            inStockOnly: false
        };
    }
    render() {
        return (
            <div className="filterableProductTable">
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
                <ProductTable
                    products={PRODUCTS}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

export default FilterableProductTable;