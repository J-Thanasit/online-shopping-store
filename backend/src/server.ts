import express from "express";
import cors from "cors";
import { product_ex } from "./data";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/products/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const products = product_ex.filter(products => products.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(products);
});

app.get("api/products/:productId", (req, res) => {
    const productId = req.params.productId;
    const products = product_ex.find(products => products.id == productId);
    res.send(products);
});

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
});