"use server";

import fs from "node:fs";

import { default as nodemailer } from "nodemailer";
import { compile } from "handlebars";

import {
  NODEMAILER_FROM_EMAIL,
  NODEMAILER_TRANSPORT_EMAIL,
  NODEMAILER_TRANSPORT_PASSWORD,
} from "@/config/config";

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

  return sendEmail(email, parentName);
}

async function sendEmail(email, parentName) {
  const emailTemplateFile = fs.readFileSync(
    `${process.cwd()}/src/template/emailtemplate.hbs`,
    "utf-8",
  );
  const template = compile(emailTemplateFile);
  const html = template({ parentName });

  const transponder = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: NODEMAILER_TRANSPORT_EMAIL,
      pass: NODEMAILER_TRANSPORT_PASSWORD,
    },
  });

  const mailOptions = {
    from: NODEMAILER_FROM_EMAIL,
    to: email,
    subject: "School Learners Web Project",
    html,
  };

  let success = null;

  transponder.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(`There was an error when trying send the mail: ${err}`);
      success = false;
    } else {
      console.log(`Email sent: ${info.response}`);
      success = true;
    }
  });

  return success;
}
