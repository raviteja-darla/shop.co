import axios from "axios";

const API_URL = "https://dummyjson.com/products/category/smartphones";

export const fetchMobileProductsAPI = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

