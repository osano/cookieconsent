"use strict"

export const STATUS_DENY = "DENY"
export const STATUS_ALLOW = "ALLOW"
export const STATUS_DISMISS = "DISMISS"
export const STATUSES = [STATUS_DENY, STATUS_ALLOW, STATUS_DISMISS]

export const categories = ["UNCATEGORIZED", "ESSENTIAL", "PERSONALIZATION", "ANALYTICS", "MARKETING"]

export const categoriesDisplayNames = {
  "UNCATEGORIZED": "Uncategorized",
  "ESSENTIAL": "Necessary (always active)",
  "PERSONALIZATION": "Personalization",
  "ANALYTICS": "Analytics",
  "MARKETING": "Marketing"
}
