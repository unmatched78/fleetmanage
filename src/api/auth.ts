// // src/api/auth.ts
// import api, { storeTokens, clearTokens } from "./api";

// export interface LoginCredentials {
//   username: string;
//   password: string;
// }

// export interface TokenPair {
//   access: string;
//   refresh: string;
// }

// // (Optional) shape of the user object your backend returns
// export interface UserData {
//   id: number;
//   username: string;
//   role: string;
//   // …any other fields you need
// }

// // ─── 1) LOGIN: POST /api/auth/token/login/ ───────────────────────────────────────
// export async function loginUser(
//   creds: LoginCredentials
// ): Promise<TokenPair> {
//   // Note: if VITE_API_BASE_URL = "http://localhost:8000/api",
//   // then this actually POSTs to "http://localhost:8000/api/auth/token/login/"
//   const response = await api.post<{
//     tokens: { access: string; refresh: string };
//     user: any;
//   }>("/auth/token/login/", {
//     username: creds.username,
//     password: creds.password,
//   });

//   const { access, refresh } = response.data.tokens;
//   storeTokens(access, refresh);
//   return { access, refresh };
// }

// // ─── 2) REGISTER: POST /api/register/ ────────────────────────────────────────────
// export async function registerUser(
//   creds: LoginCredentials
// ): Promise<TokenPair> {
//   // If your DRF RegisterView returns { tokens: { access, refresh }, user: { … } }
//   const response = await api.post<{
//     tokens: { access: string; refresh: string };
//     user: any;
//   }>("/register/", {
//     username: creds.username,
//     password: creds.password,
//   });

//   const { access, refresh } = response.data.tokens;
//   storeTokens(access, refresh);
//   return { access, refresh };
// }

// // ─── 3) LOGOUT: just clear tokens on client ───────────────────────────────────────
// export function logoutUser() {
//   clearTokens();
// }

// // ─── 4) FETCH CURRENT USER: GET /api/users/me/ ───────────────────────────────────
// export async function fetchCurrentUser(): Promise<UserData> {
//   // Be sure you add a “/api/users/me/” URL on the Django side (see below).
//   const response = await api.get<UserData>("/profiles/me/");
//   return response.data;
// }
// src/api/auth.ts
import api, { storeTokens, clearTokens } from "./api";

export interface LoginCredentials {
  identifier: string; // Updated to match login with username or email
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  phone: string;
  role: "driver" | "client";
  password: string;
  license_number?: string;
  frequent_location?: string;
  personalID?: File;
}

export interface TokenPair {
  access: string;
  refresh: string;
}

export interface UserData {
  id: number;
  username: string;
  role: string;
}

// LOGIN: POST /api/auth/token/login/
export async function loginUser(creds: LoginCredentials): Promise<TokenPair> {
  const response = await api.post<{
    tokens: { access: string; refresh: string };
    user: UserData;
  }>("/auth/token/login/", {
    identifier: creds.identifier, // Updated to use identifier
    password: creds.password,
  });

  const { access, refresh } = response.data.tokens;
  storeTokens(access, refresh);
  return { access, refresh };
}

// REGISTER: POST /api/auth/register/
export async function registerUser(data: RegisterData): Promise<TokenPair> {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("role", data.role);
  formData.append("password", data.password);
  if (data.role === "driver") {
    if (data.license_number) formData.append("license_number", data.license_number);
    if (data.frequent_location) formData.append("frequent_location", data.frequent_location);
    if (data.personalID) formData.append("personalID", data.personalID);
  }

  const response = await api.post<{
    tokens: { access: string; refresh: string };
    user: UserData;
  }>("/auth/register/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  const { access, refresh } = response.data.tokens;
  storeTokens(access, refresh);
  return { access, refresh };
}

// LOGOUT: Clear tokens on client
export function logoutUser() {
  clearTokens();
}

// FETCH CURRENT USER: GET /api/auth/user/
export async function fetchCurrentUser(): Promise<UserData> {
  const response = await api.get<UserData>("/auth/user/");
  return response.data;
}