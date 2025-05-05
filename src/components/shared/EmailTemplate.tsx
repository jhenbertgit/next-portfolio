import * as React from "react";
import { Html } from "@react-email/html";

interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  subject,
  message,
}) => (
  <Html>
    <body
      style={{
        background: "#f4f6fb",
        fontFamily: "Segoe UI, Arial, sans-serif",
        margin: 0,
        padding: "40px 0",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          padding: "32px 28px",
          border: "1px solid #e5e7eb",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            margin: 0,
            color: "#4f46e5",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            paddingBottom: "12px",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          {subject}
        </h1>
        <div style={{ margin: "24px 0 0 0" }}>
          <p
            style={{ margin: "0 0 12px 0", color: "#64748b", fontSize: "1rem" }}
          >
            <strong style={{ color: "#0f172a" }}>From:</strong> {email}
          </p>
          <div
            style={{
              background: "#f1f5f9",
              borderRadius: "8px",
              padding: "16px",
              color: "#334155",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              border: "1px solid #e2e8f0",
            }}
          >
            {message}
          </div>
        </div>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "0.92rem",
            marginTop: 32,
            textAlign: "center",
          }}
        >
          This message was sent via Jhenbert&apos;s portfolio contact form.
        </p>
      </div>
    </body>
  </Html>
);

export default EmailTemplate;
