import React from 'react';
import * as S from "./styles";

const ButtonMain = (props) => {
    const {
        text,
        handleConfirm,
        disabled
    } = props;

    const handleClick = () => {
        handleConfirm && !disabled && handleConfirm();
    };

    return (
        <S.ButtonWrapper
            onClick={handleClick}
            disabled={disabled}
        >
            <S.Text>
                {text}
            </S.Text>
        </S.ButtonWrapper>
    );
};

export default ButtonMain;