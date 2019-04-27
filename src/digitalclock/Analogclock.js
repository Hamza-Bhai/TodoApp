import React from 'react';
function AnalogClock(props){

        let lol = new Date(props.update);

       let container = {
            position: 'relative',
            top :5,
            left : '42%',
            width : 200,
            height : 200,
            borderRadius : 1000,
            borderStyle : 'solid',
            borderColor : 'black',
        }

        let seconds = {
            position: 'relative',
            top : 106,
            left :100,
            width : '48.5%',
            height : 1,
            // boder : '1px solid ',
            backgroundColor : 'red',
            transform : 'rotate('+ ((lol.getSeconds()/60)*360-90).toString()+'deg)',
            transformOrigin: '0% 0%'
        }

       let minutes = {
        position : 'relative',
        top : 105,
        left : 100,
        width : '46.5%',
        height : 3,
        // border : '1px solid ',
        backgroundColor : 'green',
        transform : 'rotate('+ ((lol.getMinutes()/60)*360-90).toString()+'deg)',
        transformOrigin: '0% 0%'

        }
         
       let hours = {
        position : 'relative',
        top : 105,
        left : 96,
        width : '40%',
        height : 5,
        // border : '1px solid ',
        backgroundColor : 'blue',
        transform : 'rotate('+ ((lol.getHours()/12)*360-90).toString()+'deg)',
        transformOrigin: '0% 0%'
        }
    let gol = {
        position : 'absolute',
        top : 95,
        left : 90,
        width : '20px',
        height :'20px',
        borderRadius:'100%',
        // border :'1px solid',
        backgroundColor : 'black'
    }
    return(
        <div className="cen" style={container}> 
            <div style={gol}></div>
            <div style={seconds}></div>
            <div style={minutes}></div>
            <div style={hours}></div>
        </div>
    )
}
export default AnalogClock;