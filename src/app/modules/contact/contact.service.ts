import { TContact } from "./contact.interface";
import { Contact } from "./contact.model";

//creating contact into db
const createContactIntoDB = async (payload: TContact) => {
  const result = await Contact.create(payload);
  return result;
};

//getting all contact from db
const getAllContactFromDB = async () => {
  const result = await Contact.find();
  return result;
};

export const ContactServices = {
  createContactIntoDB,
  getAllContactFromDB,
};
