import { Black1 } from './../../../common/styles';
import styled from "styled-components";
import { Blue1, White } from "../../../common/styles";

export const Section = styled.div`
padding: 10px;
border-radius: 100%; 
color: ${Blue1};
    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 300px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.01em;
    font-feature-settings: "liga" 0;
    white-space: pre-wrap;
    font-size: 16px;
    text-align: center;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 30px;
    min-height: 54px;
    transition: margin 0.3s ease 0s;
    align-self: center;
    margin-top: 24px;
    margin-bottom: 0px;
    z-index: unset;
    width: 100%;
    max-width: 285px;
    font-family: Lora;
    cursor:pointer;
    .arrow-icon{
        height: 19px;
        width: 19px;
        fill: none;
    }
    &:hover {
    background-color: ${Black1};
    color: ${White};
   
}
`
export const P = styled.p`
`