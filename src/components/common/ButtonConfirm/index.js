import React from 'react';
import * as S from "./styles";

const ButtonConfirm = (props) => {
    const {
        handleConfirm,
    } = props;

    const handleClick = () => {
        handleConfirm && handleConfirm();
    };

    return (
        <S.ButtonWrapper onClick={handleClick}>
            <S.Text>
                Confirm
            </S.Text>
        </S.ButtonWrapper>
    );
};

export default ButtonConfirm;