"use client";

import { Experience } from "@/app/data";
// import EventTooltip from '@/components/atoms/EventTooltip';
// import { Experience } from '@/components/organisms/Resume';
import { Color, colors } from "@/config/colors";
import { cl } from "@/utils/styles";
import { CSSProperties, FC } from "react";

const TimelineEvent: FC<{
  experience: Experience;
  style: CSSProperties;
  className?: string;
  index: number;
}> = ({ experience, className, style, index }) => {
  const color = colors[index % colors.length] as Color;
  return (
    <div
      className={cl(
        className,
        "flex flex-col w-full text-xs align-bottom border-b-8 pb-2",
        color.border
      )}
      style={style}
    >
      <span>{experience.position}</span>
      <span> {experience.company}</span>
    </div>
  );
};

export default TimelineEvent;
