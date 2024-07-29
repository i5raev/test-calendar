import React from 'react';
import ButtonSlot from "../../common/ButtonSlot";
import ButtonConfirm from "../../common/ButtonConfirm";

const ButtonsContainer = (props) => {
    const {
        handleSelectSlot,
        handleConfirm,
        selectedSlot,
        time
    } = props;

    const handleSelectTimeSlot = (value) => {
        handleSelectSlot && handleSelectSlot(value);
    };

    const handleClickConfirm = () => {
        handleConfirm && handleConfirm();
    };

    return (
        <>
            {
                selectedSlot?.slot !== time
                    ? <ButtonSlot
                         {...props}
                         handleSelectTimeSlot={handleSelectTimeSlot}
                    />
                    : <ButtonConfirm handleConfirm={handleClickConfirm}/>
            }
        </>
    );
};

export default ButtonsContainer;