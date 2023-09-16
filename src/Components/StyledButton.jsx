import styled from 'styled-components'

const StyledButton = styled.button`
    font-size: 20px;
    border-radius: 10px;
    background-color: ${props => props.oscuro? `black` : `white` };
    color: ${props => props.oscuro? `white` : `black`};
    border: 3px solid ${props => props.color || "yellow" };
`;

export default StyledButton;