import { Router } from "express";
import multer from "multer";
import os from "node:os";

// File Paths Import
import { echoCsvData } from "../controllers/echo.controllers";
import { flattenCsvData } from "../controllers/flatten.controllers";
import { multitplyCsvData } from "../controllers/multiply.controllers";
import { sumCsvData } from "../controllers/sum.controllers";
import { inverseCsvData } from "../controllers/inverse.controllers";

const upload = multer({ dest: os.tmpdir() });
const router = Router();

router.post("/echo", upload.single("file"), echoCsvData);
router.post("/flatten", upload.single("file"), flattenCsvData);
router.post("/multiply", upload.single("file"), multitplyCsvData);
router.post("/sum", upload.single("file"), sumCsvData);
router.post("/inverse", upload.single("file"), inverseCsvData);

export default router;
