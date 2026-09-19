import type { LocationI } from "../types";
import { catacombs } from "./catacombs";

export const LocationId = {
  Catacombs: "catacombs",
} as const;

export const locations: Record<string, LocationI> = {
  [LocationId.Catacombs]: catacombs,
};
