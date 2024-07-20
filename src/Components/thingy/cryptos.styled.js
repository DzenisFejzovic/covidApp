import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const Titles = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
    font-size: 1em;
    *{
        
    }
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`
export const Card = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 150px;
    p{
        font-size: 0.8rem;
        font-weight: bold;
        font-style: italic
    }
   `
   export const Calculator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    `
    export const Overlay = styled.div`
    width: 600px;
    height: 190px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    `
    export const ExitDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 1.5rem;
    padding: 0.5rem;
    p{
        cursor: pointer;
        &:hover{
            color: red;
        }
    }
    `
    export const CoinInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img{
        width: 30px;
        height: 30px;
    }
    *{
        margin-left: 1rem;
    }
    `
    export const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    *{
        margin-left: 0.5rem;
    }
    `
    export const InputCalc = styled.input`
    height: 30px;
    border: 0;
    border-radius: 5px;
    background-color: #36373b;
    color: white;
    padding: 5px;
    `