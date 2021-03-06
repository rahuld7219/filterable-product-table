import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        // This binding is necessary to make `this` work in the callback
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return (
            <div className="searchBar">
                <form>
                    <input
                        type="text"
                        placeholder="Search... "
                        value={this.props.filterText}
                        onChange={this.handleFilterTextChange}
                    />
                    <p>
                        <input
                            type="checkbox"
                            checked={this.props.inStockOnly}
                            onChange={this.handleInStockChange}
                        />
                        {' '}
                        Only show products in stock
                    </p>
                </form>
            </div>
        );
    }
}

export default SearchBar;