import emailjs from "@emailjs/browser";

// EmailJS configuration
// You'll need to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_xxxxxx";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_xxxxxx";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // Initialize EmailJS (only needs to be done once)
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: "hariharanchandrasekar2003@gmail.com",
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      };
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Email error:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again or email directly.",
    };
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: Partial<Record<keyof ContactFormData, string>> } {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

