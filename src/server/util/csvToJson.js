const deliveriesFilePath = require("../../data/deliveries.csv");
const matchesFilePath = require("../../data/matches.csv");

const csv = require("csvtojson");

const csvToJson = async (fileName) => {
  if (fileName) {
    let filePath = "";
    if (fileName === "deliveries") {
      filePath = deliveriesFilePath;
    } else if (fileName === "matches") {
      filePath = matchesFilePath;
    }
    if (filePath) {
      try {
        const jsonArray = await csv().fromFile(filePath);
        return jsonArray;
      } catch (err) {
        console.log("csv to json error: ", err);
      }
    }
  }
  return null;
};

module.exports = csvToJson;
