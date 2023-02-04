import React from 'react';
import { formatToLocalTime } from "../services/weatherService";


function TimeAndLocation({ weather: { dt, timezone, name } }) {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <p className="text-xl text-white font-extralight">
        {formatToLocalTime(dt, timezone)}
      </p>

      <p className="text-3xl font-medium text-white">
        {name}
      </p>
    </div>
  );
}

export default TimeAndLocation;