import axios from "axios";

const customFetch = axios.create({
    baseURL: '/api/v1',
    headers: { "Content-Type": "application/json" }
})

const getToken = () => localStorage.getItem('token')

// Request Interceptor: Attach JWT Token
customFetch.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor: Handle Expired Token
customFetch.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error("Session expired, redirecting to login...");
            localStorage.removeItem("token"); // Clear expired token
            window.location.href = "/login"; // Redirect to login
        }
        return Promise.reject(error);
    }
);


export default customFetch;