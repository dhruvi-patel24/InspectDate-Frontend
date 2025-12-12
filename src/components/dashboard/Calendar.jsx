import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import './Calendar.scss';

const Calendar = () => {
  return (
    <div className="modern-calendar animate-fade-in-up">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrap5Plugin]}
        initialView="dayGridMonth"
        themeSystem="bootstrap5"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        buttonText={{
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day'
        }}
        height="auto"
        aspectRatio={1.8}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        events={[
          { title: 'Site Inspection - Project A', start: new Date().toISOString().split('T')[0] },
          { title: 'Client Meeting', start: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0] },
          { title: 'Foundation Check', start: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0] },
          { title: 'Safety Audit', start: new Date(new Date().setDate(new Date().getDate() + 8)).toISOString().split('T')[0] }
        ]}
      />
    </div>
  );
};

export default Calendar;
