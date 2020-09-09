import styled, { css } from 'styled-components';

const commonStyle = css`
    padding: 5px;
    margin: 10px;
    border-radius: 5px;
`;

export const ButtonStyle = styled.button`
    ${commonStyle}
    background-color: #282c34;
    color: white;
    height: 40px;
`;

export const DropDownStyle = styled.div`
    display: inline-block;
    width: 150px;
`;

const InputStyle = styled.input`
    border-radius: 5px;
    height: 25px;
    margin: 10px;
    padding: 5px;
    width: 350px;
`;

export default InputStyle;

