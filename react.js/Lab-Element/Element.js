import React from "react";

export default class Element extends React.Component {
    render () {
        return (
            React.createElement('div', {style : {marginLeft : "50px"}}, 
                [React.createElement('h1', {style : {color: 'green'}}, "Resume"),
                React.createElement('h2', {}, "Sahaphap" ),
                React.createElement('p', {},"สีที่ชอบ : สีฟ้า" ),
                React.createElement('p', {},"ความสูง : 168 cm" ),
                React.createElement('p', {},"น้ำหนัก : 70 kg" ),
                React.createElement('p', {},"คำคมที่ชอบ : คนเราเกิดครั้งเดียว" )
                ]
            )  
        )       
    }
}