import csv from "json2csv"
import Location from "../models/location.model.js";

const CsvParser = csv.Parser;

const exportAllTimeData = async (req, res) => {
    const locations = []
    const  sensors = await Location.find();


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

export default exportAllTimeData