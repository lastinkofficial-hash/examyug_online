import axios from 'axios'

const API_BASE_URL = 'https://examyug-dashboard-backend.onrender.com/api/v1'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add token if available
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// API endpoints
export const courseAPI = {
  getAllCourses: (page = 1, limit = 10) =>
    apiClient.get(`/course/view-all-courses?page=${page}&limit=${limit}`),
  getCourseById: (id) => apiClient.get(`/course/${id}`),
  searchCourses: (query) => apiClient.get(`/course/search?q=${query}`),
}

export const authAPI = {
  login: (email, password) =>
    apiClient.post('/auth/login', { email, password }),
  signup: (userData) =>
    apiClient.post('/auth/signup', userData),
  logout: () => {
    localStorage.removeItem('authToken')
  },
  resetPassword: (email) =>
    apiClient.post('/auth/reset-password', { email }),
}

export const materialAPI = {
  getAllMaterials: (page = 1, limit = 10) =>
    apiClient.get(`/materials?page=${page}&limit=${limit}`),
  getMaterialById: (id) => apiClient.get(`/materials/${id}`),
}

export default apiClient
