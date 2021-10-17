import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="searchBar">
                <form>
                    <input type="text" placeholder="Search... " />
                    <p>
                        <input type="checkbox" />
                        {' '}
                        Only show products in stock
                    </p>
                </form>
            </div>
        );
    }
}

export default SearchBar;