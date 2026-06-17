import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    city: v.string(),
    program_interest: v.string(),
    format_preference: v.string(),
    funding_interest: v.string(),
    employment_status: v.string(),
    education_level: v.string(),
    start_timeline: v.string(),
    consent: v.boolean(),
    consent_timestamp: v.number(),
    source: v.string(),
  }).index("by_email", ["email"]),
});
