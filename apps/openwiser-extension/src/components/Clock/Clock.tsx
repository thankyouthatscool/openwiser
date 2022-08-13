import { DateTime } from "luxon";
import { useEffect, useState } from "react";

import { useUIHooks } from "../../hooks";
import { ClockWrapper } from "./Styled";

export const Clock = () => {
  const { timeFormatString } = useUIHooks();

  const [currentTime, setCurrentTime] = useState<string>(
    DateTime.now().toFormat(timeFormatString)
  );

  useEffect(() => {
    const ticker = setInterval(() => {
      setCurrentTime(() => DateTime.now().toFormat(timeFormatString));
    }, 1000);

    return () => {
      clearInterval(ticker);
    };
  }, [timeFormatString]);

  return <ClockWrapper>{currentTime}</ClockWrapper>;
};
