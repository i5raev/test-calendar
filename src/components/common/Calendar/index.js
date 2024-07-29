import React from 'react';
import DatePicker from "react-datepicker";
import * as S from "./styles";

const Calendar = (props) => {
    const {
        selectedDate,
        setSelectedDate
    } = props;

    const onChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <S.Wrapper>
            <DatePicker
                selected={selectedDate}
                onChange={onChange}
                inline
            />
        </S.Wrapper>
    );
};

export default Calendar;