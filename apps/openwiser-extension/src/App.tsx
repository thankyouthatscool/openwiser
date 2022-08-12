import axios from "axios";

import { Button } from "@mui/material";

import { ContentWrapper, RootWrapper } from "./Styled";

export const App = () => {
  return (
    <RootWrapper>
      <ContentWrapper>
        <Button variant="contained" component="label">
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
        </Button>
      </ContentWrapper>
    </RootWrapper>
  );
};
