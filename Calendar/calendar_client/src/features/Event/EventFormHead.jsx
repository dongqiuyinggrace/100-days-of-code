import React from 'react';

const EventFormHead = () => {
  return (
    <div className="event-form-head">
      <nav className='nav'>
        <button className='nav-link'>
          Save
        </button>
        <button className='nav-link'>
          Delete
        </button>
        <button className='nav-link'>
          Link
        </button>
      </nav>
    </div>
  );
};

export default EventFormHead;
