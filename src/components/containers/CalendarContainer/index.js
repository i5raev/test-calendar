import React, {useEffect, useState} from "react";
import * as S from "./styles";
import Calendar from "../../common/Calendar";
import {format} from "date-fns";
import ButtonsContainer from "../ButtonsContainer";
import Input from "../../common/Input";
import ButtonMain from "../../common/ButtonMain";

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
    const [showCalendarState, setShowCalendarState] = useState(true);
    const [showFormState, setShowFormState] = useState(false);
    const [showFormConfirmState, setShowFormConfirmState] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [disabledButtonSchedule, setDisabledButtonSchedule] = useState(true);

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleChangeInputs = (value, key) => {
        if(key === "name"){
            setNameInput(value);
        }

        if(key === "email"){
            setEmailInput(value);
        }
    };

    const handleSelectSlot = (value) => {
        setSelectedSlot({
            slot: value,
        });
    };

    const handleConfirm = () => {
        setShowCalendarState(false);
        setShowFormState(true);
    };

    const handleClickSchedule = () => {
        setShowFormState(false);
        setShowFormConfirmState(true);
    };

    useEffect(() => {
        if(selectedDate){
            setShowTimeSlots(true);
        }else{
            setShowTimeSlots(false);
        }
    },[selectedDate]);

    useEffect(() => {
        if(emailInput && nameInput && isValidEmail(emailInput)){
            setDisabledButtonSchedule(false);
        }else{
            setDisabledButtonSchedule(true);
        }
    },[emailInput, nameInput]);

    return (
        <S.Wrapper>
            <S.Content>
                <S.Columns>
                    <S.Left showTimeSlots={showTimeSlots}>
                        <S.LeftHead>
                            <S.LeftDescription>Эльвира Альбаева</S.LeftDescription>
                            <S.LeftTitle>30 minutes meeting</S.LeftTitle>
                        </S.LeftHead>
                        <S.LeftBody>
                            <S.LeftText>test@gmail.com</S.LeftText>
                            <S.LeftText>+(996)999-99-99-99</S.LeftText>
                            <S.LeftText>Киргизстан</S.LeftText>
                            <S.LeftText>Выберите подходящее для вас время</S.LeftText>
                        </S.LeftBody>
                    </S.Left>
                    {
                        showCalendarState &&
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
                    }
                    {
                        showFormState &&
                            <S.Right showTimeSlots={true}>
                                <S.RightHead>
                                    <S.RightTitle>Enter detailed information</S.RightTitle>
                                </S.RightHead>
                                <S.RightBody>
                                    <S.FormSection>
                                        <S.InputWrapper>
                                            <Input
                                                label={'Name *'}
                                                placeholder={"Enter name"}
                                                value={nameInput}
                                                onChange={(value) => handleChangeInputs(value, "name")}
                                            />
                                        </S.InputWrapper>
                                        <S.InputWrapper>
                                            <Input
                                                label={'Email *'}
                                                placeholder={"Enter email"}
                                                value={emailInput}
                                                onChange={(value) => handleChangeInputs(value, "email")}
                                            />
                                        </S.InputWrapper>
                                        <S.ButtonWrapper>
                                            <ButtonMain
                                                text={"Schedule a meeting"}
                                                handleConfirm={handleClickSchedule}
                                                disabled={disabledButtonSchedule}
                                            />
                                        </S.ButtonWrapper>
                                    </S.FormSection>
                                </S.RightBody>
                            </S.Right>
                    }
                    {
                        showFormConfirmState &&
                            <S.Right>
                                <S.RightBody>
                                    <S.SuccessTitle>The meeting was successfully scheduled</S.SuccessTitle>
                                </S.RightBody>
                            </S.Right>
                    }
                </S.Columns>
            </S.Content>
        </S.Wrapper>
    );
};

export default CalendarContainer;