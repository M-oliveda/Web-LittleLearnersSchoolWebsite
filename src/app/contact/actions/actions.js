"use server";

import fs from "node:fs";

import { createTransport } from "nodemailer";
import { compile } from "handlebars";
import { google } from "googleapis";

import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_EMAIL,
  GOOGLE_REFRESH_TOKEN,
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

  const oauth2 = google.auth.OAuth2;
  const myOAuth2Client = new oauth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);

  let success = null;

  try {
    myOAuth2Client.setCredentials({
      refresh_token: GOOGLE_REFRESH_TOKEN,
    });

    const accessToken = await myOAuth2Client.getAccessToken();
    const transportOptions = {
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: GOOGLE_EMAIL,
        clientId: GOOGLE_CLIENT_ID,
        refreshToken: GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    };

    const smtpTransport = createTransport(transportOptions);
    const mailOptions = {
      from: {
        name: "Little Learners School Website",
        address: GOOGLE_EMAIL,
      },
      to: email,
      subject: "School Learnes Web Project | Contact",
      html,
    };
    const info = await smtpTransport.sendMail(mailOptions);

    console.log(`Email sent: ${info.response}`);
    success = true;
  } catch (error) {
    console.log(`There was an error when trying send the mail: ${err}`);
    success = false;
  }

  return success;
}
