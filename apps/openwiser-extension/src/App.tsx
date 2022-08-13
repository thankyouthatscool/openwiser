import { Clock } from "./components";
import { RootWrapper } from "./Styled";

export const App = () => {
  return (
    <RootWrapper>
      <Clock />
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
</Button>; */
}

{
  /* <Sidebar />
<ContentWrapper>
  <Button
    color="secondary"
    onClick={() => {
      handleSetDrawerState(true);
    }}
    variant="contained"
  >
    Open Drawer
  </Button>
  <Button
    color="primary"
    onClick={async () => {
      const res = await chrome.tabs.query({
        currentWindow: true,
        active: true,
      });

      chrome.notifications.create({
        message: res[0].url || "FUCK THE POLIS!",
        iconUrl: "img.jpg",
        title: "FUCK THE POLIS!",
        type: "basic",
      });
    }}
    variant="contained"
  >
    Notification
  </Button>
</ContentWrapper> */
}
