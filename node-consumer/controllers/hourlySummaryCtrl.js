import Location from "../models/location.model.js"

const hourlySummaryCtrl = async (req, res) => {
  //get the date
  const date = new Date();
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  const hourlySummary = await Location.aggregate([
    {
      $match: {
        timestamp: {
          $gte: today,
        },
      },
    },
    {
      $group: {
        _id: {
          $hour: '$timestamp'
        },
        minTemperature: { $min: "$temperature" },
        maxTemperature: { $max: "$temperature" },
        avgTemperature: {$avg: "$temperature"},
        count: {$sum: 1}
      },
    },
  ]).sort({_id: 1});

  

  
  return res.status(200).json({
    success: true,
    message: "Summary fetched successfully",
    hourlySummary
  });
}

export default hourlySummaryCtrl