import axios from 'axios';

// URL de la API HTTPS que deseas acceder
const apiURL = 'https://fepruebatecnicaculqi-backend-production.up.railway.app/';

// Función para realizar la solicitud de inicio de sesión
export async function login(correo: string, password: string) {
  try {
    // Utiliza el CORS Proxy para realizar la solicitud HTTPS desde una página HTTP
    const response = await axios.post(`https://cors-anywhere.herokuapp.com/${apiURL}/auth/login`, 
      { correo, password }, 
      {
        headers: {
          'Content-Type': 'application/json',
          // Aquí puedes añadir otros headers si es necesario.
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Error al procesar la solicitud');
  }
}

