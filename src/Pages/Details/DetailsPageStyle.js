import styled from "styled-components";

export const Main = styled.div`
background: #5e5e5e;
width: 1440px;
min-height: 120vh;
`
export const Selection = styled.div`
position: absolute;
width: 220px;
height: 72px;
left: 40px;
top: 220px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
`
export const Container = styled.div`
position: absolute;
width: 1389px;
height: 663px;
left: 0px;
top: 320px;
border-radius: 38px;
background-color: ${(props) => props.color};

.img-front{
    position: absolute;
    width: 282px;
    height: 282px;
    left: 44px;
    top: 26px;
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
}
.img-back{
    position: absolute;
    width: 282px;
    height: 282px;
    left: 44px;
    top: 355px;
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
}
`
export const Stats = styled.div`
position: absolute;
width: 343px;
height: 613px;
left: 360px;
top: 24px;
background: #FFFFFF;
border-radius: 12px;

.base-stats{

width: 307px;
height: 160px;
left: 378px;
top: 43px;
font-family: 'Inter';
font-size:2rem;
}

.stats-block{
    border-top: 1px grey solid;
    margin-top:4px;
}
`
export const Moves = styled.div`

.informations-id{
position: absolute;
width: 30px;
height: 19px;
left: 774px;
top: 24px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
}

.informations-name{
position: absolute;
width: 238px;
height: 58px;
left: 771px;
top: 39px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;
color: #FFFFFF;
}

.informations-type{
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;
position: absolute;
width: 99px;
height: 31px;
left: 774px;
top: 107px;
}

.background{
    position: absolute;
    width: 292px;
    height: 453px;
    left: 771px;
    top: 184px;
    background: #FFF;
    border-radius: 8px; 


    .group{
        display: flex;
        width: 120px;
        margin-left: 10px;
        padding: 10px;
        border-radius: 12px;
        background: #ECECEC;
        border: 1px dashed rgba(0, 0, 0, 0.14);
    }
}
.text{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: 'Inter';
    font-style: normal;
    color: #000000;
    font-weight: 800;
    font-size: 28px;
    margin-left: 10px;
    padding: 2px;
}

`
export const Image = styled.div`
`
export const Pokemon = styled.img`
    position: absolute;
    width: 270px;
    height: 270px;
    left: 1109px;
    top: -100px;
`
export const Pokebola = styled.img`
position: absolute;
left: 600px;
width: 900px;
bottom: -120px;
`
