import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="searchBar">
                <form>
                    <input
                        type="text"
                        placeholder="Search... "
                        value={this.props.filterText}
                        onChange={this.props.setFilterText}
                    />
                    <p>
                        <input
                            type="checkbox"
                            checked={this.props.inStockOnly}
                            onChange={this.props.setInStockOnly}
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