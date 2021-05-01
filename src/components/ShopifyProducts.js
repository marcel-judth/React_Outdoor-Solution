import React, { useEffect } from "react";

function ShopifyProducts() {
  useEffect(() => {
    loadProducts();
  }, []);

  return <div id="products" onLoad="test()"></div>;
}

export default ShopifyProducts;
