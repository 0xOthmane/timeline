"use client";

import { cl } from "@/utils/styles";
import { experienceTimelineIndices } from "@/utils/timeline";
import { FC } from "react";
import Time from "./Time";
import { Experience } from "@/app/data";
import TimelineEvent from "../Timeline/TimelineEvent";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Timeline: FC<{
  className?: string;
  experiences: Experience[];
}> = ({ className, experiences }) => {
  if (!experiences.length) return null;

  // const startYear = (experiences[0]?.start.getFullYear() as number) - 1;
  const startYear = Math.min(
    ...experiences.map((exp) => exp.start.getFullYear())
  );

  // Sort array
  experiences.sort((a, b) => a.start.getFullYear() - b.start.getFullYear());
  
  const years = Array.from(
    { length: new Date().getFullYear() - startYear + 1 },
    (_, i) => startYear + i
  );

  return (
    <div
      className={cl(className, "flex flex-col px-8 my-4 py-8 rounded bg-black")}
    >
      <ScrollArea className="p-2 border">
        <div
          className={`grid space-y-2 w-max`}
          style={{
            gridTemplateColumns: `repeat(${years.length * 4}, 1fr)`,
            gridTemplateRows: `repeat(${experiences.length + 1}, 1fr)`,
          }}
        >
          {experiences.map((experience, i) => {
            const { start, end } = experienceTimelineIndices(experience, years);
            return (
              <TimelineEvent
                key={i}
                index={i}
                experience={experience}
                style={{
                  gridRowStart: i + 1,
                  gridRowEnd: i + 2,
                  gridColumnStart: start,
                  gridColumnEnd: end,
                }}
              />
            );
          })}

          {years.map((year, i) => (
            <div
              key={i}
              className="border-t !mt-4"
              style={{
                gridRowStart: experiences.length + 1,
                gridRowEnd: experiences.length + 2,
                gridColumnStart: i * 4 + 1,
                gridColumnEnd: i * 4 + 5,
              }}
            >
              {year}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {/* <Time years={years} /> */}

    </div>
  );
};

export default Timeline;
