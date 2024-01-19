import { Router } from "express";
import { echoCsvData } from "../controllers/echo.controllers";
import { flattenCsvData } from "../controllers/flatten.controllers";
import { multitplyCsvData } from "../controllers/multiply.controllers";
import { sumCsvData } from "../controllers/sum.controllers";
import { inverseCsvData } from "../controllers/inverse.controllers";

const router = Router();

router.route("/echo").get(echoCsvData);
router.route("/flatten").get(flattenCsvData);
router.route("/multiply").get(multitplyCsvData);
router.route("/sum").get(sumCsvData);
router.route("/inverse").get(inverseCsvData);

export default router;
