import { Experience } from "@/app/data";

/**
 * Returns the start and end indices of an experience in the timeline
 *
 * @param experience - The experience to get the indices for
 * @param years - The years to get the indices for
 * @returns The start and end indices of the experience
 */
export const experienceTimelineIndices = (
  experience: Experience,
  years: number[]
) => {
  const startDate = new Date(experience.start);
  const start =
    (startDate.getFullYear() - 2015) * 4 +
    Math.ceil((startDate.getMonth() + 1) / 3);

  // Cheat to get two columns for the last experience
  const now = new Date();
  now.setMonth(now.getMonth() + 1);

  const endDate = experience.end === "present" ? now : new Date(experience.end);
  const end =
    (endDate.getFullYear() - 2015) * 4 +
    Math.ceil((endDate.getMonth() + 1) / 3) +
    1;

  console.table({
    name: experience.company,
    startDate: experience.start,
    start,
    endDate: experience.end,
    end,
  });
  return { start, end };
};
