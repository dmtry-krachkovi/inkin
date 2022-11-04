import axios from "axios";

const API_URL = "http://192.168.1.110:5000/api/auth";

export async function registerHTTP({ email, password }) {
  const response = await axios.post(`${API_URL}/register`, {
    email,
    password,
  });
  return response.data;
}

export async function loginHTTP({ email, password }) {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  return response.data;
}

export async function verifyHTTP({ uid, code }) {
  const response = await axios.post(`${API_URL}/verify/${uid}`, {
    code,
  });
  return response.data;
}
