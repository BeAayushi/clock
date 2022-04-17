import React, { useState, useEffect } from "react";
function Clock(props) {
  const [digital, setdigital] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setdigital(date.toLocaleTimeString());
    }, 1000);
  }, [digital]);
  return (
    <div className="clock">
      <div className="digital">
        <h1>{digital}</h1>
      </div>
    </div>
  );
}
export default Clock;
