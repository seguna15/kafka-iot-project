import Location from "../models/location.model.js";

const dataStorage = async(data) => {
    
    const location = await Location.create({
        slug: data.slug,
        longitude : data.longitude,
        latitude : data.latitude,
        temperature : data.temperature,
        heartbeat: data.heartbeat,
        timestamp : data.timestamp,
    })
 
    return location; 
}

export default dataStorage;