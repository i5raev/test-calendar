import styled from "styled-components";

export const ButtonWrapper = styled.div`
    border-radius: 80px;
    width: 240px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.disabled ? "#ccc" : "rgba(0, 142, 176, 0.89)"};
    cursor: pointer;
`;

export const Text = styled.div`
    color: #fff;
    font-size: 14px;
    font-weight: 500;
`;