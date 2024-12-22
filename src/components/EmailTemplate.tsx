import * as React from "react";
import { Html } from "@react-email/html";

interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = async ({
  email,
  subject,
  message,
}) => (
  <Html>
    <div>
      <h1>{subject}</h1>
      <p>From: {email}</p>
      <p>Message: {message}</p>
    </div>
  </Html>
);

export default EmailTemplate;
