import axios from "axios";

// Create a custom configuration
export default axios.create(
    {
        baseURL: 'https://api.rawg.io/api',
        params: {
            key: 'e0cbc44863264dfc878171f58ff9fc9d'
        }
    }
)