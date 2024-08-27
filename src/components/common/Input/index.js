import React from "react";
import * as S from "./styles";

const Input = (props) => {
    const {
        label,
        placeholder,
        onChange
    } = props;

    const handleChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        onChange && onChange(e?.target?.value);
    };

    return (
        <S.Wrapper>
            <S.Label>{label}</S.Label>
            <S.Input
                placeholder={placeholder}
                onChange={handleChange}
            />
        </S.Wrapper>
    );
};

export default Input;