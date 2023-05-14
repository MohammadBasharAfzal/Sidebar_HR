import './Calendar.css'
import Calendar_left from '../calendar-left/Calendar-left.js';
import Calendar_right from '../calendar-right/Calendar-right.js';

function Calendar() {
    return(
        <div className="calendar_header">
            <Calendar_left></Calendar_left>
            <Calendar_right></Calendar_right>
        </div>
    );
}

export default Calendar;