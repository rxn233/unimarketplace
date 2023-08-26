const express = require("express");
const app = express();
const { PythonShell } = require("python-shell");
const { spawn } = require("child_process");

const executePython = async (script, args) => {
  console.log("Entry");
  const arguments = args.map((arg) => arg.toString());
  const py = spawn("python3", [script, ...arguments]);
  console.log("py variable done");
  const result = await new Promise((resolve, reject) => {
    console.log("inside result promise");
    let output = "";
    let errorOutput = "";
    py.stdout.on("data", (data) => {
      // console.log("Data here", JSON.parse(data));
      output = data.toString();
      console.log("Output is", output);
      // output = data.toString
    });

    py.stderr.on("data", (data) => {
      console.log("Python error", data);
      reject("Error in running script");
    });

    py.on("exit", (code) => {
      console.log("Exited with code", code);
      resolve(output);
    });
  });
  console.log("Result", result.trim());
  return result;
};

const estimatedPrice = async (req, res) => {
  console.log("Inside estimated price");
  try {
    const result = await executePython("./predict.py", [35, 2]);
    console.log(result);
    console.log("Result got");
    res.json({ flag: "y", estimated_price: result.trim(), error: "no" });
  } catch (err) {
    console.log("Error", err);
    res.json({ flag: "n", error: err });
  }
};

module.exports = {
  estimatedPrice,
};
