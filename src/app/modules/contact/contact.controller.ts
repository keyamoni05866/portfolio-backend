import { catchAsync } from "../../utils/catchAsync";
import { ContactServices } from "./contact.service";

//Creating A Contact
const createContact = catchAsync(async (req, res) => {
  const result = await ContactServices.createContactIntoDB(req.body);

  if (result) {
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Contact created successfully",
      data: result,
    });
  } else {
    res.status(404).json({
      success: true,
      statusCode: 404,
      message: "No Data Found",
      data: [],
    });
  }
});

//get All Contact
const getAllContacts = catchAsync(async (req, res) => {
  const result = await ContactServices.getAllContactFromDB();
  if (result) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Contacts retrieved successfully",
      data: result,
    });
  } else {
    res.status(404).json({
      success: true,
      statusCode: 404,
      message: "No Data Found",
      data: [],
    });
  }
});

export const ContactControllers = {
  createContact,
  getAllContacts,
};
