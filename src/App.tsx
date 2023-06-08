import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeechGPT from "./components/SpeechGPT";
import { GPTLayout } from "./components/GPTLayout";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#343540",
  padding: theme.spacing(1),
  textAlign: "center",
  height: "100vh",
  overflowX: "auto",
  flexGrow: 1,
}));
const MainTypo = styled(Typography)(({ theme }) => ({
  backgroundColor: "none",
  padding: theme.spacing(1),
  textAlign: "center",
  width: 200,
  position:'relative',
  top:10,
  fontFamily:'inherit',
  fontSize:20,
  fontWeight:700,
  color:'#FFFFFF'
}));
function App() {
  return (
    <MainBox>
      <Grid container spacing={2}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={12}
        >
          <MainTypo>Speech To GPT</MainTypo>
        </Grid>
        <Grid item xs={12}>
          <GPTLayout />
        </Grid>
      </Grid>
    </MainBox>
  );
}

export default App;
