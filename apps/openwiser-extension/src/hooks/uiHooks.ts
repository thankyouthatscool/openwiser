import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from ".";
import { setIsDrawerOpen, setTimeFormatString } from "../store";

export const useUIHooks = () => {
  const dispatch = useAppDispatch();

  const { isDrawerOpen, timeFormatString } = useAppSelector(({ ui }) => ui);

  const handleSetDrawerState = useCallback(
    (isDrawerVisible: boolean) => {
      dispatch(setIsDrawerOpen(isDrawerVisible));
    },
    [dispatch]
  );

  const handleSetTimeFormatString = useCallback(
    (timeFormatString: string) => {
      dispatch(setTimeFormatString(timeFormatString));
    },
    [dispatch]
  );

  return {
    handleSetDrawerState,
    handleSetTimeFormatString,
    isDrawerOpen,
    timeFormatString,
  };
};
