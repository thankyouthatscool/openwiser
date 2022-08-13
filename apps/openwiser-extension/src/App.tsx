import { Button } from "@mui/material";

import { Sidebar } from "./components";
import { useAppDispatch } from "./hooks";
import { setIsDrawerOpen } from "./store";
import { ContentWrapper, RootWrapper } from "./Styled";

export const App = () => {
  const dispatch = useAppDispatch();

  return (
    <RootWrapper>
      <Sidebar />
      <ContentWrapper>
        <Button
          color="secondary"
          onClick={() => {
            dispatch(setIsDrawerOpen(true));
          }}
          variant="contained"
        >
          Open Drawer
        </Button>
      </ContentWrapper>
    </RootWrapper>
  );
};

{
  /* <Button variant="contained" component="label">
Upload Kindle Clipping
<input
  accept=".txt"
  hidden
  type="file"
  onChange={async (e) => {
    console.log("new");

    const formData = new FormData();
    formData.append("file", e.target.files![0]);

    console.log(formData);

    const res = await axios.post(
      "http://localhost:5000/upload/kindle",
      formData
    );

    console.log(res);
  }}
/>
</Button> */
}
