import { Router } from "express";

import sendSMS from "./utils/SNS";

const router = Router();

router.post("/send-sms", async (req, res) => {
  const { message, topic } = req.body;

  await sendSMS({ message, topic });

  return res.status(201).json({ message: "SMS ENVIADO!" });
});

export default router;