import React, { FC } from "react";

interface SortArrowProps {
  isAscending: boolean | undefined
}

const SortArrow: FC<SortArrowProps> = ({ isAscending }) => {
  return (
    <span data-testid='sort-arrow'>{isAscending ? '▲' : '▼'}</span>
  )
}

export default SortArrow