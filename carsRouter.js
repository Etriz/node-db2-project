const express = require("express");
const db = require("./data/dbConfig.js");

const router = express();

router.use(express.json());

router.get("/", async (req, res) => {
  const data = await db("cars");
  res.status(200).json(data);
});

router.post("/", validateBody, async (req, res, next) => {
  try {
    const data = await db("cars").insert({ ...req.body });
    res.status(201).json({ ...req.body });
  } catch (error) {
    console.log(error);
    next({ status: 500, errorMessage: "Error when creating this entry" });
  }
});

async function validateBody(req, res, next) {
  const { VIN, make, model, mileage } = req.body;
  if (VIN && make && model && mileage) {
    next();
  } else {
    next({ status: 400, errorMessage: "Must include VIN, make, model, and mileage" });
  }
}

module.exports = router;
