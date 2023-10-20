import React from "react";

const Products = () => {
    // const products = ["Laptop", "Phone", "Modem", "Laptop"];

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 100,
        },
        {
            id: 2,
            name: "Phone",
            price: 100,
        },
        {
            id: 3,
            name: "Modem",
            price: 100,
        },
        {
            id: 4,
            name: "Laptop",
            price: 100,
        },
    ];

    const productList = products.map((product, index) => (
        <div key={product.id}>{product.name + ": $" + product.price}</div>
    ));

    return <div>{productList}</div>;
};

export default Products;
