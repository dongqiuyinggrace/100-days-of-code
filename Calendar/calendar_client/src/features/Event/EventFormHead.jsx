import React from 'react';

const EventFormHead = () => {
  return (
    <div className="event-form-head">
      <div><h3>Start</h3></div>
      <nav className='nav'>
        <button className='nav-link'>
          <i class="far fa-save"></i> Save
        </button>
        <button className='nav-link'>
          <i class="far fa-trash-alt"></i> Delete
        </button>
        <div className="vertical-line"></div>
        <div  className='nav-link'>
          <span style={{marginRight: "10px"}}>Show as:</span> 
          <select name="status" style={{width: "200px", marginRight: "10px"}}>
            <option value="busy">Busy</option>
            <option value="outside">Outside</option>
            <option value="idle">Idle</option>
          </select>
          <span style={{marginRight: "10px"}}>Reminder:</span> 
          <input />
        </div>
      </nav>
    </div>
  );
};

export default EventFormHead;
