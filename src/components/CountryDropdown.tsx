import React, { FC } from 'react';
import { getNames } from 'country-list';
import style from "../styles/CountryDropdown.module.scss"

interface SelectCountryProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isEditing?: boolean
}

const CountryDropdown: FC<SelectCountryProps> = ({ value, onChange, isEditing }) => {

  const countriesList = getNames();

  return (
    <div className={style.container} >
      {!isEditing && <div className={style.label}>Country: *</div>}
      <select className={isEditing ? style.select : style.formSelect} value={value} onChange={onChange} required data-testid="countrySelect">
        <option value="">Select country</option>
        {countriesList.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
    </div>

  );
};

export default CountryDropdown;
