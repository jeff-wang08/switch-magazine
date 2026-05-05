export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  trade_interest: string;
  funding_interest: "Yes" | "No" | "Not sure";
  employment_status: "Employed" | "Unemployed" | "Student";
  consent: boolean;
};

export const requiredLeadFields: Array<keyof LeadPayload> = [
  "name",
  "email",
  "phone",
  "city",
  "trade_interest",
  "funding_interest",
  "employment_status",
  "consent",
];
