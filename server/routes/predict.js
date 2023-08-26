const express = require("express");
const app = express();
const { PythonShell } = require("python-shell");

const estimatedPrice = async (req, res) => {
  console.log("Inside estimated price section");
  const input = [[1, 700, 1000]];
  const options = {
    mode: "json",
    pythonPath: "python3",
    pythonOptions: ["-u"],
    scriptPath:
      "/Users/rohitnair/Documents/rxn233/unimarketplace/server/routes",
    args: [10],
  };
  console.log("Options set");
  PythonShell.run("predict.py", options, (err, results) => {
    console.log("Inside shell");
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }
    console.log("Not error atleast");
    const predictions = JSON.parse(results[0]);
    console.log("Pred", predictions);
    res.json({ flag: "y", estimated_price: predictions });
  });
  console.log("Shell ran");
};

// // First Attempt
// // const express = require("express");
// // const app = express();
// // // const joblib = require("joblib");
// // const { DataFrame } = require("pandas-js");

// // const estimatedPrice = async (req, res) => {
// //   try {
// //     const linear_reg_model = joblib.load("../models/linear_reg_model.pkl");

// //     const input = [[1, 700, 1000]];
// //     const predictionInput = new DataFrame(
// //       input,
// //       (columns = ["Condition", "Used_for_Duration", "Original_Price"])
// //     );

// //     console.log("Prediction Input", predictionInput);
// //     const estimatedPrice = linear_reg_model.predict(predictionInput);
// //     console.log("EstimatedPrice", estimatedPrice);
// //     res.json({ flag: "y", estimated_price: estimatedPrice });
// //   } catch (error) {
// //     res.json({ flag: "n", error: error });
// //   }
// // };

module.exports = {
  estimatedPrice,
};
