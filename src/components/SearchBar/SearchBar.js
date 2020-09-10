import React, { useState } from 'react';
import InputStyle, { ButtonStyle, DropDownStyle } from './styles';
import Select from 'react-select';
import options, { plotOptions } from '../../constants/dropdownOptions';

const SearchBar = (props) => {
    const [ searchText, onSearchTextChange ] = useState();
    const [ year, onYearChange ] = useState();
    const [ type, onTypeChange ] = useState('all');
    const [ plot, onPlotChange ] = useState('all');

    const onSearchClick = () => {
        props.onClick({ t: searchText, type, y: year, plot });
    }
    return (
        <>
            <InputStyle type="text" onChange={(e) => onSearchTextChange(e.target.value)}/>
            <DropDownStyle>
                <Select
                    defaultValue={options[0]}
                    onChange={(e) => onTypeChange(e.value)}
                    options={options}
                    placeholder="Title"
                />
            </DropDownStyle>
            <InputStyle
                type="text"
                placeholder="Year"
                onChange={(e) => onYearChange(e.target.value)}
                shortInput
            />
            <DropDownStyle>
                <Select
                    defaultValue={plotOptions[0]}
                    onChange={(e) => onPlotChange(e.value)}
                    options={plotOptions}
                />
            </DropDownStyle>
            <ButtonStyle onClick={onSearchClick}>Search</ButtonStyle>
        </>
    );
}


export default SearchBar;