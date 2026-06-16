import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const recent = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("leads")
      .order("desc")
      .take(args.limit ?? 100);
  },
});

export const create = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("leads", {
      ...args,
      consent_timestamp: Date.now(),
      source: "switch-magazine-apply",
    });
  },
});
