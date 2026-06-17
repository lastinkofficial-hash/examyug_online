import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://examyug-dashboard-backend.onrender.com/api/v1";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Check if running in browser
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (
      typeof window !== "undefined" &&
      error.response?.status === 401
    ) {
      localStorage.removeItem("authToken");

      // Redirect only if not already on login page
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    return Promise.reject(
      error.response?.data || {
        message: error.message || "Something went wrong",
      }
    );
  }
);

// Course APIs
export const courseAPI = {
  getAllCourses: (page = 1, limit = 10) =>
    apiClient.get(`/course/view-all-courses?page=${page}&limit=${limit}`),

  getCourseById: (id) =>
    apiClient.get(`/course/${id}`),

  searchCourses: (query) =>
    apiClient.get(`/course/search?q=${encodeURIComponent(query)}`),
};

// Authentication APIs
export const authAPI = {
  login: async (email, password) => {
    const response = await apiClient.post("/auth/login", {
      email,
      password,
    });

    // Save token automatically if present
    if (
      typeof window !== "undefined" &&
      response?.token
    ) {
      localStorage.setItem("authToken", response.token);
    }

    return response;
  },

  signup: (userData) =>
    apiClient.post("/auth/signup", userData),

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
    }
  },

  resetPassword: (email) =>
    apiClient.post("/auth/reset-password", { email }),
};

// Material APIs
export const materialAPI = {
  getAllMaterials: (page = 1, limit = 10) =>
    apiClient.get(`/materials?page=${page}&limit=${limit}`),

  getMaterialById: (id) =>
    apiClient.get(`/materials/${id}`),
};

export default apiClient;