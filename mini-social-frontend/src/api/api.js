// import axios from "axios";

// // 
// const API = axios.create({
//   baseURL: "https://mini-social-3w-assigiment.onrender.com/api"
// });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) req.headers.Authorization = token;
//   return req;
// });

// export default API;



import axios from "axios";

const API = axios.create({
  baseURL: "https://mini-social-3w-assigiment.onrender.com/api",
});

// 🔐 Add token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`; // ✅ IMPORTANT FIX
  }

  return req;
});

export default API;