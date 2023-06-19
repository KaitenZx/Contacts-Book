import { LabelsKey } from "./types";

export const EMPTY_CONTACT = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  country: ''
};

export const LABELS = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  country: "Country"
} as const

export const LABELS_KEYS = Object.keys(LABELS) as LabelsKey[]