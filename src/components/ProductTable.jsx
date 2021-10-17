import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;
        this.props.products.forEach(product => {
            if (product.name.indexOf(this.props.filterText) === -1) {
                return;
            }
            if (this.props.inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        key={product.category}
                        category={product.category}
                    />
                );
                lastCategory = product.category;
            }
            rows.push(
                <ProductRow
                    key={product.name}
                    product={product}
                />
            );
        });
        return (
            <table className="productTable">
                <thead className="productTableHeader">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;