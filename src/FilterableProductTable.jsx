import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import PRODUCTS from "./data";

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback    
        this.setFilterText = this.setFilterText.bind(this);
        this.setInStockOnly = this.setInStockOnly.bind(this);

        this.state = {
            filterText: "",
            inStockOnly: false
        };
    }

    setFilterText(e) {
        this.setState(
            {
                filterText: e.target.value
            }
        )
    }

    setInStockOnly() {
        this.setState(state => {
            return { inStockOnly: !state.inStockOnly };
        })
    }

    render() {
        return (
            <div className="filterableProductTable">
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    setFilterText={this.setFilterText}
                    setInStockOnly={this.setInStockOnly}
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