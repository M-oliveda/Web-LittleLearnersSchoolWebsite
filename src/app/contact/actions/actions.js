"use server";

export async function sendMail(formData) {
  const parentName = formData.get("parentname");
  const email = formData.get("email");
  const phoneNumber = formData.get("phonenumber");
  const studentAge = formData.get("studentage");
  const selectedProgram = formData.get("selectedprogram");
  const message = formData.get("message");

  console.log("Form data recieved:", {
    parentName,
    email,
    phoneNumber,
    studentAge,
    selectedProgram,
    message,
  });
}
