// Example:

// Imports ===========================================================
// import type { TypeName } from "../types/type-name.js";

// Constants =========================================================
// const API_URL = "https://api.example.com";

// Variables =========================================================
// Declare variables here.

// Services ===========================================================
// export async function getResourceName(): Promise<TypeName[]> {
//   try {
//     return await request(API_URL);
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// export async function getResourceNameById(id: number): Promise<TypeName> {
//   try {
//     return await request(`${API_URL}/${id}`);
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// export async function createResourceName(data: TypeName): Promise<TypeName> {
//   try {
//     return await request(API_URL, {
//       method: "POST",
//       body: JSON.stringify(data),
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// export async function updateResourceName(
//   id: number,
//   data: TypeName
// ): Promise<TypeName> {
//   try {
//     return await request(`${API_URL}/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(data),
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// export async function deleteResourceName(id: number): Promise<void> {
//   try {
//     await request(`${API_URL}/${id}`, {
//       method: "DELETE",
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// Private Functions =================================================
// async function request(
//   url: string,
//   options?: RequestInit
// ): Promise<any> {
//   const response = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     ...options,
//   });

//   if (!response.ok) {
//     throw new Error("Request failed.");
//   }

//   return response.json();
// }