import React, { useState } from 'react';

const SenderPage = () => {
  const [timeSlot, setTimeSlot] = useState('');

  const handleTimeSlotChange = (e) => {
    setTimeSlot(e.target.value);
  };

  const handleSubmit = () => {
    // Submit time slot to backend or store in state
    alert(`Time slot selected: ${timeSlot}`);
  };

  return (
    <div>
      <h2>Sender Dashboard</h2>
      <label>Select Delivery Time Slot:</label>
      <select value={timeSlot} onChange={handleTimeSlotChange}>
        <option value="">Choose Time Slot</option>
        <option value="8am-10am">8 AM - 10 AM</option>
        <option value="10am-12pm">10 AM - 12 PM</option>
        <option value="12pm-2pm">12 PM - 2 PM</option>
        <option value="2pm-4pm">2 PM - 4 PM</option>
        <option value="4pm-6pm">4 PM - 6 PM</option>
      </select>
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
};

export default SenderPage;
