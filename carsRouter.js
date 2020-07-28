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

router.put("/:id", validateBody, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await db("cars")
      .where("id", id)
      .update({ ...req.body });
    res.status(200).json({ ...req.body });
  } catch (error) {
    console.log(error);
    next({ status: 500, errorMessage: "Error when updating this entry" });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await db("cars").where("VIN", id).del();
    res.status(200).json({ message: "Car Record Deleted" });
  } catch (error) {
    console.log(error);
    next({ status: 500, errorMessage: "Error when deleting this entry" });
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
