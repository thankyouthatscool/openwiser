import { Button, Drawer } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { setIsDrawerOpen } from "../../store";

export const Sidebar = () => {
  const dispatch = useAppDispatch();

  const { isDrawerOpen } = useAppSelector(({ ui }) => ui);

  return (
    <>
      <Drawer anchor="left" open={isDrawerOpen} variant="persistent">
        <Button
          color="error"
          onClick={() => {
            dispatch(setIsDrawerOpen(false));
          }}
          variant="contained"
        >
          Close
        </Button>
      </Drawer>
    </>
  );
};
