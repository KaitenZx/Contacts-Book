import { LABELS } from "./constants";

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
}



export type LabelsKey = keyof typeof LABELS;