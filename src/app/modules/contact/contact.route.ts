import express from "express";

import { ContactControllers } from "./contact.controller";

const router = express.Router();

//creating  Route
router.post(
  "/create-contact",

  ContactControllers.createContact
);

//get all  route
router.get("/", ContactControllers.getAllContacts);

export const ContactRoutes = router;
