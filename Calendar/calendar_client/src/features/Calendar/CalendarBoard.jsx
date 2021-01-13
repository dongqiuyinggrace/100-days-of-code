import React from 'react';
import moment from 'moment';

const weekdays = moment.weekdays();
weekdays.push(weekdays.shift());
console.log(weekdays)

const CalendarBoard = () => {

    return (
        <div className="calendar-board">
            <table className="table">
                <thead>
                    <tr>
                        {weekdays.map(weekday => <td>{weekday}</td>)}
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default CalendarBoard
