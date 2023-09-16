import styled from "styled-components";

const Link = ({ className, children }) => (
    <a className={className}>
        {children}
    </a>
);

const StyledLink1 = styled(Link)`
    color: #BF4F74;
    font-weight: bold;
`;

function StyledLink(){
    return(<div>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink1>Styled, exciting Link</StyledLink1>
    </div>);
}

export default StyledLink1;