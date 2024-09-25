import axios from "axios";
 import { loadUserFromStorage } from "../../(redux)/authSlice";

export const base_url = process.env.BACKEND_API; 
console.log(base_url)
//login
export const loginUser = async ({email, password}) => {
    
    const response = await axios.post(`${base_url}/auth/login`, {email, password}); 
    //return promise
    return response.data
}


//register
export const registerUser = async ({username,email, password}) => {
    const response = await axios.post(`${base_url}/auth/register`, {username,email, password}); 
    //return promise
    return response.data
}

// fetch sensor location
export const fetchLocation = async () => {
    const {token}  =  await loadUserFromStorage()
    
    try {
        const response = await axios.get(
            `${base_url}/location/latest`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }   
            }

        );
        
   
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export const fetchSensors = async () => {
  const { token } = await loadUserFromStorage();

  try {
    const response = await axios.get(`${base_url}/location/sensors`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//fetch daily summary
export const fetchDailySummary = async (sensor) => {
    const {token}  =  await loadUserFromStorage()
    try {
        const response = await axios.get(`${base_url}/stats/daily/${sensor}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
   
        return response.data

    } catch (error) {
        console.log(JSON.stringify(error))
    }
}

//fetch hourly summary
export const fetchHourlySummary = async (sensor) => {
    const {token}  =  await loadUserFromStorage()
    try {
        const response = await axios.get(`${base_url}/stats/hourly/${sensor}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
   
        return response.data

    } catch (error) {
        console.log(JSON.stringify(error))
    }
}

export const exportDailyData = async () => {
    const {token}  =  await loadUserFromStorage()
    try {
        const response = await axios.get(`${base_url}/export-data/today`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
   
        return response.data

    } catch (error) {
        console.log(JSON.stringify(error))
    }
}
