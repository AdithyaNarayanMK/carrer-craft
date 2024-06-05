import React, { useEffect, useRef ,useState } from 'react';
import Select from 'react-select'
import PropTypes from 'prop-types';

const TagsComponenet = ({ placeholder }) => {
  
  const skillsOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #E5E7EB', // Bottom border color
      borderLeft: 'none', // Remove left border
      borderRight: 'none', // Remove right border
      borderTop: 'none', // Remove top border
      borderRadius: '0', // Set border radius to 0
      '&:hover': {
        borderColor: '#000' // Hover border color
      }
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#000', // Set color of the down arrow to black
      '&:hover': {
        color: '#000' // Set color of the down arrow to black on hover
      }
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none' // Hide the vertical line separator
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#000',
     // Set color to black
    }),
    placeholder: (provided, state) => ({
      ...provided,
      // color: '#A0AEC0', // Set color of placeholder text
      paddingLeft: '0px' // Move placeholder text to the left by 0 pixels
    })
  };
  // Event handler for when options are selected or deselected
  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
    console.log('Selected options:', selected);
    for (let index = 0; index < selected.length; index++) {
      const element = selected[index].value;
      console.log(element);
    }
  };
  return (
      <div className="">
        <Select
          isMulti
          name="colors"
          options={skillsOptions}
          className="basic-multi-select max-w-[500px] min-h-[39px]"
          classNamePrefix="select"
          styles={customStyles}
          placeholder={placeholder} 
          value={selectedOptions} // Set the selected value
          onChange={handleSelectChange} // Pass the event handler
        />
      </div>
  );
};
export default TagsComponenet;
