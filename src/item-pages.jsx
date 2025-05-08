import { data } from "./data";
import { useParams } from "react-router-dom"

export const ItemPages = () => {
    const params = useParams();
    const currentItem = data[parseInt(params.id)];
    if (!currentItem) return <div> 해당 상품이 존재하지 않습니다!</div>

    return <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center"
    }}>
    <img src ={currentItem.image}
    alt={currentItem.name}
    style={{
        width: 300,
        height: 300,
        objectFit: "cover",
        borderRadius: 8,
        marginBottom: 16
    }} />
    <h1>{currentItem.name}</h1>
    <p>₩{currentItem.price}</p>
    </div>
};


