
import React from "react";
import ProductCard from "../molecules/ProductCard";
import { useSelector } from "react-redux";
import type { Product } from "../types/Types";
import type { RootState } from "../redux/Store";





const OnSaleProducts: React.FC = () => {


  const products : Product[]  = useSelector((store: RootState) => store.products?.onSaleproducts ) 
  
  
  return (


    <div style={{ padding: "40px", backgroundColor: "#f9f9f9", fontFamily: "sans-serif" , maxWidth : "1320px" , margin : "auto" }}>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1a1a1a" }}>On Sale Products</h2>

        <button
          style={{
            backgroundColor: "#111",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "24px",
            cursor: "pointer",
          }}
        >
          See All →
        </button>

      </div>

        <ProductCard products={products}/>   

       
      <div style={{ textAlign: "center", marginTop: "24px" }}>


        <span
          style={{
            display: "inline-block",
            width: "10px",
            height: "10px",
            backgroundColor: "#ffc107",
            borderRadius: "50%",
            margin: "0 4px",
          }}
        />
    
      </div>



    </div>
  );
};

export default OnSaleProducts;
