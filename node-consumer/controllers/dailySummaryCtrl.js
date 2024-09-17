import Location from "../models/location.model.js"

const dailySummaryCtrl = async (req, res) => {
  //get the date
  const date = new Date();
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  const dailySummary = await Location.aggregate([
    {
      $match: {
        timestamp: {
          $gte: today,
        },
      },
    },
    {
      $group: {
        _id: null,
        minTemperature: { $min: "$temperature" },
        maxTemperature: { $max: "$temperature" },
        avgTemperature: {$avg: "$temperature"},
      },
    },
  ]);

  

  
  return res.status(200).json({
    success: true,
    message: "Summary fetched successfully",
    dailySummary: {
      minTemp: dailySummary[0]?.minTemperature,
      maxTemp: dailySummary[0]?.maxTemperature,
      avgTemp: parseFloat(dailySummary[0]?.avgTemperature.toFixed(2)),
    },
  });
}

export default dailySummaryCtrl