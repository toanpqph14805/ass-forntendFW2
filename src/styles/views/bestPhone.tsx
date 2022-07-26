import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;
    margin-top: 30px;
`

export const Span = styled.span`
    color: #444444;
    font-size: 18px;
    font-family: 400;
    text-transform: uppercase;
`
export const DivTitle = styled.div`
    padding-left: 8%;
    display: flex;
    justify-content: space-between;

`
export const DivPhone = styled.div`
    margin-top: 20px;
`
export const BoxPhone = styled.div`
    width: 210px;
    height: auto;
    margin-left: 10px;
`
export const Price = styled.span`
    color: #D70018;
    font-size: 16px;
`
export const DisPrice = styled.span`
    color: #707070;
    font-size: 14px;
    margin-left: 5px;
`
export const DivText = styled.div`
    background-color: #E5E7EB;
    border-radius: 5px;
`
export const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 15px;
`
export const ButtonToCart = styled.button`
   width: 100%;
    height: 35px;
    border: 1px solid white;
    border-radius: 5px;
    background: lightgray;
    &:hover {
        background-color: #e4e461;
        color: white;
    }
`
