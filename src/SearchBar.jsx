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
                    />
                    <p>
                        <input
                            type="checkbox"
                            checked={this.props.inStockOnly}
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