import styled from "styled-components";

export const ButtonWrapper = styled.div`
    border-radius: 4px;
    width: calc(100% - 4px);
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.focused ? "rgba(0, 142, 176, 0.89)" : "rgba(0, 142, 176, 0.3)"};
    background: rgba(0, 142, 176, 0.89);
    margin-bottom: 8px;
    cursor: pointer;
`;

export const Text = styled.div`
    color: #fff;
    font-size: 14px;
    font-weight: 500;
`;