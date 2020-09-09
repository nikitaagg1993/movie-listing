import React, { useState } from 'react';
import InputStyle, { ButtonStyle, DropDownStyle } from './styles';
import Select from 'react-select';

const SearchBar = (props) => {
    const [ searchText, onSearchTextChange ] = useState();
    const [ type, onTypeChange ] = useState('all');

    const onSearchClick = () => {
        props.onClick({ t: searchText, type });
    }

    const options = [
        { label: 'All', value: 'all' },
        { label: 'Movies', value: 'movies' },
        { label: 'Series', value: 'series' },
        { label: 'Episodes', value: 'episodes' },
    ];
    return (
        <>
            <InputStyle type="text" onChange={(e) => onSearchTextChange(e.target.value)}/>
            <DropDownStyle>
            <Select
                defaultValue={options[0]}
                onChange={(e) => onTypeChange(e.value)}
                options={options}
            />
            </DropDownStyle>
            <ButtonStyle onClick={onSearchClick}>Search</ButtonStyle>
        </>
    );
}


export default SearchBar;