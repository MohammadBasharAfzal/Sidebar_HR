import './Calendar-left.css'
import Events from '../events/Events';

function Calendar_left(){
    return(
        <div className='calendar_left'>
            <div className='sidebar'>
                <UpcomingEvents></UpcomingEvents>
                <DontMissScheduleEvents></DontMissScheduleEvents>
            </div>
            <div className='sidebar'>
                <Events date="05/03/2023" time="10:00-11:00" content="Meeting with a client" subContent="Tell how to boost website traffic"></Events>
                <Events date="05/03/2023" time="" content="Holi" subContent="Holiday"></Events>
                <Events date="05/03/2023" time="10:00-11:00" content="Meeting with a client" subContent="Tell how to boost website traffic"></Events>
                <Events date="05/03/2023" time="" content="Ramadan" subContent="Holiday"></Events>
                <Events date="05/03/2023" time="" content="Ram Navami" subContent="Holiday"></Events>
            </div>
        </div>
    );
}

function UpcomingEvents(){
    return(
        <div id='upcoming_events'>Upcoming Events</div>
    );
}

function DontMissScheduleEvents(){
    return(
        <div id='dont_miss_schedule_events'>Don't miss schedule events</div>
    );
}
export default Calendar_left;