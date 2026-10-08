import { ROOMS } from "../../plants/index.js";

export const NAME_MAX_LENGTH = 40;
export const FREQUENCY_MIN_DAYS = 1;
export const FREQUENCY_MAX_DAYS = 365;

// Letters from any language (é, ü, Arabic...), words separated by single spaces.
// No digits or symbols.
const NAME_PATTERN = /^\p{L}+( \p{L}+)*$/u;

export function validatePlant({ name, room, wateringFrequencyDays }) {
  const errors = {};
  const trimmedName = (name ?? "").trim();

  if (trimmedName === "") {
    errors.name = "Enter a plant name.";
  } else if (trimmedName.length > NAME_MAX_LENGTH) {
    errors.name = `Use ${NAME_MAX_LENGTH} characters or fewer.`;
  } else if (!NAME_PATTERN.test(trimmedName)) {
    errors.name = "Use letters only, no numbers or symbols.";
  }

  if (!ROOMS.includes(room)) {
    errors.room = "Choose a room.";
  }

  if (
    !Number.isInteger(wateringFrequencyDays) ||
    wateringFrequencyDays < FREQUENCY_MIN_DAYS ||
    wateringFrequencyDays > FREQUENCY_MAX_DAYS
  ) {
    errors.wateringFrequencyDays = `Enter a whole number of days from ${FREQUENCY_MIN_DAYS} to ${FREQUENCY_MAX_DAYS}.`;
  }

  return errors;
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0;
}
