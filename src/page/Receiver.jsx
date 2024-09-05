import React, { useState } from 'react';

const ReceiverPage = () => {
  const [timeSlot, setTimeSlot] = useState('2pm-4pm'); // Example pre-selected time

  const handleTimeSlotChange = (e) => {
    setTimeSlot(e.target.value);
  };

  const handleSubmit = () => {
    // Submit new time slot
    alert(`Time slot modified: ${timeSlot}`);
  };

  return (
    <div>
      <h2>Receiver Dashboard</h2>
      <p>Current Time Slot: {timeSlot}</p>
      <label>Modify Time Slot:</label>
      <select value={timeSlot} onChange={handleTimeSlotChange}>
        <option value="8am-10am">8 AM - 10 AM</option>
        <option value="10am-12pm">10 AM - 12 PM</option>
        <option value="12pm-2pm">12 PM - 2 PM</option>
        <option value="2pm-4pm">2 PM - 4 PM</option>
        <option value="4pm-6pm">4 PM - 6 PM</option>
      </select>
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default ReceiverPage;
