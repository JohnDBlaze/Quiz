import * as React from "react";

export const Timer = () => {
  const [counter, setCounter] = React.useState(60);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div>
      <div>Countdown: {counter}</div>
    </div>
  );
};
