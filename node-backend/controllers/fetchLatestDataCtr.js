import Location from "../models/location.model.js"

/** 
 ** @description Fetch latest iot data for map
 ** @param  request and response object
 ** @returns JSON success Boolean, message String, location Document
 ** @route POST /api/v1/location/latest
 ** @access PRIVATE
*/
const fetchLatestDataCtr = async (req, res) => {
    const latest = await Location.find().select("sensorTag longitude latitude").sort({$natural: -1}).limit(5);

    return res.status(200).json({
        success: true,
        message: "Latest record fetched successfully.",
        latest
    })
}

export default fetchLatestDataCtr