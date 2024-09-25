import csv from "json2csv"
import Location from "../models/location.model.js";

const CsvParser = csv.Parser;

const exportDailyData = async (req, res) => {
    let locations = [];
    const date = new Date();
     const today = new Date(
       date.getFullYear(),
       date.getMonth(),
       date.getDate()
     );
    const  sensors = await Location.find({timestamp: {$gte: today}});


    sensors.forEach((sensor) => {
        const {_id, sensorTag, longitude, latitude, temperature, heartbeat, timestamp} = sensor;
        locations.push({
          _id,
          sensorTag,
          longitude,
          latitude,
          temperature,
          heartbeat,
          timestamp,
        });
    }) 

    const csvFields = ["Id", "SensorTag", "Longitude", "Latitude", "Temperature", "Heartbeat", "Timestamp"];

    const csvParser =  new CsvParser({ csvFields });
    const csvData = csvParser.parse(locations)
    const filename =   Date.now();
    
    res.attachment(`${filename}.csv`);
    return res.status(200).send(csvData);

    
    
}

export default exportDailyData