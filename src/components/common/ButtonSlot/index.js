import React, {useState} from 'react';
import * as S from "./styles";

const ButtonSlot = (props) => {
    const {
        time,
        text,
        handleSelectTimeSlot,
    } = props;

    const [focused, setFocused] = useState(false);

    const handleClick = () => {
        handleSelectTimeSlot && handleSelectTimeSlot(time);
    };

    return (
        <S.ButtonWrapper
            onMouseEnter={() => setFocused(true)}
            onMouseLeave={() => setFocused(false)}
            focused={focused}
            onClick={handleClick}
        >
            <S.Text>
                {text || ""}
            </S.Text>
        </S.ButtonWrapper>
    );
};

export default ButtonSlot;