
import type { Product } from '../types/Types'


interface ProductCardProps {

    products: Product[]
}



const ProductCard = ({ products }: ProductCardProps) => {
    return (

        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
                marginTop: "30px",
            }}
        >

            {products.map((p: Product) => (
                <div
                    key={p.id}
                    style={{
                        backgroundColor: "#fff",
                        borderRadius: "12px",
                        padding: "20px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        position: "relative",
                        transition: "transform 0.3s",
                        cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
                >
                    {p.onSale && (
                        <span
                            style={{
                                position: "absolute",
                                top: "12px",
                                left: "12px",
                                backgroundColor: "#ff4d4d",
                                color: "#fff",
                                borderRadius: "6px",
                                padding: "2px 8px",
                                fontSize: "12px",
                                fontWeight: "600",
                            }}
                        >
                            Sale
                        </span>
                    )}
                    <img
                        src={p.image}
                        alt={p.name}
                        style={{ width: "100%", height: "150px", objectFit: "contain", marginBottom: "12px" }}
                    />
                    <p style={{ fontWeight: 600, fontSize: "14px", margin: "6px 0 8px" }}>{p.name}</p>



                    <div>
                        <span style={{ fontWeight: 700 }}>{p.price}</span>{" "}
                        <span
                            style={{
                                textDecoration: "line-through",
                                color: "#999",
                                marginLeft: "5px",
                                fontSize: "13px",
                            }}
                        >
                            {p.oldPrice}
                        </span>
                    </div>


                    <div
                        style={{
                            fontSize: "12px",
                            color: "#555",
                            marginTop: "6px",
                        }}
                    >
                        {p.sold} Sold
                    </div>


                </div>
            ))}
        </div>



    )
}

export default ProductCard