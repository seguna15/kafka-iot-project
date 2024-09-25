import Location from "../models/location.model.js"

/** 
 ** @description Fetch latest iot data for map
 ** @param  request and response object
 ** @returns JSON success Boolean, message String, location Document
 ** @route POST /api/v1/location/sensors
 ** @access PRIVATE
*/
const fetchAllSensors = async (req, res) => {
    const sensors = await Location.distinct("sensorTag");

    return res.status(200).json({
        success: true,
        message: "All sensors fetched successfully.",
        sensors
    })
}

export default fetchAllSensors;