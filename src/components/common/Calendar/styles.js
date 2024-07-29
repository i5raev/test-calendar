import styled from "styled-components";

export const Wrapper = styled.div`
    .react-datepicker {
        border: none;
        width: 100%;
    }

    .react-datepicker__month-container {
        width: 100%;
        border: none;
    }

    .react-datepicker__header {
        background-color: #ffffff;
        border: none;
    }

    .react-datepicker__day-names {
        height: 60px;
    }

    .react-datepicker__current-month {
        font-size: 16px;
        font-weight: 500;
        color: #282829;
    }

    .react-datepicker__day {
        width: calc(100% / 8);
        aspect-ratio: 1 / 1;
        text-align: center;
        margin: 10px 0;
        font-size: 14px;
        font-weight: 500;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: gray;
        border-radius: 50%;
    }

    .react-datepicker__day-name {
        margin: 40px 0 0 0;
        width: calc(100% / 8);
        //aspect-ratio: 1 / 1;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        color: #282829;
    }

    .react-datepicker__day--keyboard-selected {
        background-color: rgba(0, 142, 176, 0.3);
        border-radius: 50%;
        color: rgba(0, 142, 176, 0.89);
    }

    .react-datepicker__day--selected {
        background-color: rgba(0, 142, 176, 0.3);
        border-radius: 50%;
        color: rgba(0, 142, 176, 0.89);
    }

    .react-datepicker__navigation--next {
        right: 20%;
        top: 6px;
    }

    .react-datepicker__navigation--previous {
        left: 20%;
        top: 6px;
    }

    .react-datepicker__day--outside-month {
        color: #ccc;
    }
`;