import React, {useEffect, useState} from "react";
import * as S from "./styles";
import Calendar from "../../common/Calendar";
import ButtonSlot from "../../common/ButtonSlot";
import {format} from "date-fns";
import ButtonsContainer from "../ButtonsContainer";

const CalendarContainer = () => {
    const timeSlotsList = [
        {
            time: "09:00:00",
            text: "9:00am"
        },
        {
            time: "09:30:00",
            text: "9:30am"
        },
        {
            time: "10:00:00",
            text: "10:00am"
        },
        {
            time: "10:30:00",
            text: "10:30am"
        },
        {
            time: "11:00:00",
            text: "11:00am"
        },
        {
            time: "11:30:00",
            text: "11:30am"
        },
        {
            time: "12:00:00",
            text: "12:00am"
        },
        {
            time: "13:00:00",
            text: "1:00pm"
        },
        {
            time: "14:00:00",
            text: "14:00pm"
        },
        {
            time: "15:00:00",
            text: "15:00pm"
        },
        {
            time: "16:00:00",
            text: "16:00pm"
        },
    ];

    const [selectedDate, setSelectedDate] = useState(null);
    const [showTimeSlots, setShowTimeSlots] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSelectSlot = (value) => {
        setSelectedSlot({
            slot: value,
            confirmed: false,
        });
    };

    const handleConfirm = () => {
        setSelectedSlot(old => ({
            ...old,
            confirmed: true,
        }));
    };

    useEffect(() => {
        if(selectedDate){
            setShowTimeSlots(true);
        }else{
            setShowTimeSlots(false);
        }
    },[selectedDate]);

    return (
        <S.Wrapper>
            <S.Content>
                <S.Columns>
                    <S.Left showTimeSlots={showTimeSlots}>
                        <S.LeftHead>
                            <S.LeftDescription>Technical Rajni</S.LeftDescription>
                            <S.LeftTitle>30 minutes meeting</S.LeftTitle>
                        </S.LeftHead>
                    </S.Left>
                    <S.Right showTimeSlots={showTimeSlots}>
                        <S.RightHead>
                            <S.RightTitle>Select a Date & Time</S.RightTitle>
                        </S.RightHead>
                        <S.RightBody>
                            <S.CalendarWrapper showTimeSlots={showTimeSlots}>
                                <Calendar
                                    selectedDate={selectedDate}
                                    setSelectedDate={setSelectedDate}
                                />
                            </S.CalendarWrapper>
                            {
                                showTimeSlots &&
                                    <S.TimeSlotsWrapper>
                                        <S.TimeSlotsHead>
                                            <S.TimeSlotsTitle>
                                                {selectedDate ? format(selectedDate, "eeee, PPP") : ""}
                                            </S.TimeSlotsTitle>
                                        </S.TimeSlotsHead>
                                        <S.TimeSlotsList>
                                            {
                                                timeSlotsList.length > 0 && timeSlotsList.map((slot, index) => (
                                                    <ButtonsContainer
                                                        key={index}
                                                        {...slot}
                                                        handleSelectSlot={handleSelectSlot}
                                                        handleConfirm={handleConfirm}
                                                        selectedSlot={selectedSlot}
                                                    />
                                                ))
                                            }
                                        </S.TimeSlotsList>
                                    </S.TimeSlotsWrapper>
                            }
                        </S.RightBody>
                    </S.Right>
                </S.Columns>
            </S.Content>
        </S.Wrapper>
    );
};

export default CalendarContainer;