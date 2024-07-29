import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
`;

export const Content = styled.div`
    border-radius: 8px;
    border: 1px solid #f1f1f1;
    width: 80%;
    height: 80%;
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
`;

export const Columns = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   height: 100%;
`;

export const Left = styled.div`
   width: ${props => props.showTimeSlots ? "30%" : "50%"};
   border-right: 1px solid #f1f1f1;
   padding: 20px 40px; 
`;

export const LeftHead = styled.div`
  padding-top: 80px;
`;

export const LeftTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
`;

export const LeftDescription = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: gray;
    margin-bottom: 16px;
`;

export const Right = styled.div`
   width: ${props => props.showTimeSlots ? "70%" : "50%"};
   padding: 40px 40px;
`;

export const RightHead = styled.div`
   margin-bottom: 32px;
`;

export const RightTitle = styled.div`
    font-size: 24px;
    font-weight: 500;
`;

export const RightBody = styled.div`
   display: flex;
    justify-content: space-between;
`;

export const CalendarWrapper = styled.div`
  width: ${props => props.showTimeSlots ? "60%" : "100%"};
`;

export const TimeSlotsWrapper = styled.div`
  margin-left: 20px;
  width: 30%;
`;

export const TimeSlotsHead = styled.div`
    margin-bottom: 48px;
`;

export const TimeSlotsTitle = styled.div`
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`;


export const TimeSlotsList = styled.div`
    max-height: 400px;
    overflow-y: auto;
`;