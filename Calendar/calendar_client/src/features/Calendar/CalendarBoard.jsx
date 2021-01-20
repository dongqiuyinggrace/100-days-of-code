import React from 'react';
import moment from 'moment';
import CalendarHead from './CalendarHead';

const weekdays = moment.weekdays();

const CalendarBoard = () => {
    const currentMonth = moment().format('MMMM');
    const currentYear = moment().year();
    const currentDate = moment().date();
    console.log(currentDate);
    const firstWeekDayOfMonth = moment().startOf('month').day();
    const daysNumInMonth = moment().daysInMonth();

    const blanks = [];
    for (let i=0; i<firstWeekDayOfMonth; i++) {
        blanks.push(<td key={i*80} className="empty_cell">{''}</td>);
    }

    const daysInMonth = [];
    for (let d=1; d<=daysNumInMonth; d++) {
        let classes = "";
        if (d === currentDate) {
            classes = "day current_day";
        } else {
            classes = "day"
        }
        daysInMonth.push(
            <td key={d} className={classes} style={{padding: '1px'}} >
                {d === currentDate && <div><hr /></div>}
                {d}
            </td>)
    }

    const totalSlots = [...blanks, ...daysInMonth];
    let cells = [];
    let rows = [];
    totalSlots.forEach((cell, index) => {
        if (index % 7 !== 0) {
            cells.push(cell);
        } else {
            let insertRow = [...cells];
            rows.push(insertRow);
            cells = [];
            cells.push(cell);
        }

        if (index === totalSlots.length - 1) {
            let insertRow = [...cells];
            rows.push(insertRow);
        }
    })

    const renderRows = rows.map((row, index) => <tr key={index * 100}>{row}</tr>)
    
    return (
        <div className="calendar-board">
            <CalendarHead year={currentYear} month={currentMonth} />
            <table className="table">
                <thead>
                    <tr>
                        {weekdays.map(weekday => 
                            <td key={weekday} className="week_days" style={{padding: '10px 20px', borderTop: 'none'}}>
                                {weekday}
                            </td>)}
                    </tr>
                </thead>
                <tbody>
                    {renderRows}
                </tbody>
            </table>
            
        </div>

    )
}

export default CalendarBoard
