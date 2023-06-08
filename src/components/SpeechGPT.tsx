import React, { useState } from "react";
import { Mic, Stop } from "@mui/icons-material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechGPT = () => {
  const [inputText, setInputText] = useState("");
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const handleSpeechRecognition = () => {
    if (!listening) {
      SpeechRecognition.startListening({ continuous: true });
      SpeechRecognition.getRecognition();
    } else {
      SpeechRecognition.stopListening();
      SpeechRecognition.abortListening();
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // TODO: Send the input text to the chat GPT API
    setInputText("");
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <Typography variant="h4" align="center">
        Chat GPT Application
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Type your message or click the microphone button to speak"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={listening ? <Stop /> : <Mic />}
          onClick={handleSpeechRecognition}
          style={{ marginTop: "1rem" }}
        >
          {listening ? "Stop" : "Speak"}
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!inputText}
          style={{ marginTop: "1rem" }}
        >
          Send
        </Button>
      </form>
      {listening && (
        <Typography variant="body1">Spoken Text: {transcript}</Typography>
      )}
    </div>
  );
};

export default SpeechGPT;
