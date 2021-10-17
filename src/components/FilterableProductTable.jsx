import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import PRODUCTS from "../data";

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback    
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);

        this.state = {
            filterText: "",
            inStockOnly: false
        };
    }

    handleFilterTextChange(filterText) {
        this.setState(
            {
                filterText
            }
        )
    }

    handleInStockChange(inStockOnly) {
        this.setState(
            {
                inStockOnly
            }
        );
    }

    render() {
        return (
            <div className="filterableProductTable">
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
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