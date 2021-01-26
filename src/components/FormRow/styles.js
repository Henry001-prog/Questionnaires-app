import styled from 'styled-components/native';

export const Container = styled.View.attrs({
    elevation: 1,
})`
    padding: 10px;
    margin: 5px 5px 5px 5px;
    margin-top: ${props => (props.first ? '15px' : '10px')};
    margin-bottom: ${props => (props.last ? '15px' : '10px')};
    align-items: center;
    justify-content: center;
    background-color: #252535;
    border-radius: 9px;
    padding-top: 5px;
`;