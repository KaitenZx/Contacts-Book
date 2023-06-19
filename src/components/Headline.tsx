import React, { FC } from "react";
import { LabelsKey, } from "../utils/types";
import SortArrow from "./SortArrow";
import style from '../styles/Headline.module.scss'
import { LABELS } from "../utils/constants";

interface HeadlineProps {
  label: LabelsKey;
  currentSortField: LabelsKey | undefined;
  isAscending: boolean | undefined
  onClick: () => void;
}

const Headline: FC<HeadlineProps> = ({ label, currentSortField, onClick, isAscending }) => {
  return (
    <div onClick={onClick} className={style[label]}>
      {LABELS[label]}
      {currentSortField === label && <SortArrow isAscending={isAscending} />}
    </div>
  );
};

export default Headline