export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  program_interest: string;
  format_preference: "Online" | "Hybrid" | "In person" | "No preference";
  funding_interest: "Yes" | "No" | "Not sure";
  employment_status: "Employed" | "Unemployed" | "Student" | "Self-employed";
  education_level: "High school/GED" | "Some college" | "College degree" | "Other";
  start_timeline: "Immediately" | "1-3 months" | "3+ months" | "Just researching";
  consent: boolean;
};

export const requiredLeadFields: Array<keyof LeadPayload> = [
  "name",
  "email",
  "phone",
  "city",
  "program_interest",
  "format_preference",
  "funding_interest",
  "employment_status",
  "education_level",
  "start_timeline",
  "consent",
];
