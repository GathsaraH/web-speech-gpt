import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const QuestionList = styled(Box)(({ theme }) => ({
  backgroundColor: "#202123",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  borderRadius:12
}));
export const GPTLayout = () => {
  return (
    <div>
      <Grid sx={{ height: "100vh" }} container spacing={2}>
        <Grid item xs={3}>
          <QuestionList></QuestionList>
        </Grid>
        <Grid item xs={9}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </div>
  );
};
