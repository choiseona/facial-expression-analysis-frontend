export const initialSample = {
  id: undefined,
  sampleImg: undefined,
  comment: undefined,
};

export const initialEmotion = {
  happy: 0,
  surprise: 0,
  angry: 0,
  fear: 0,
  sad: 0,
};

export const initialResult = {
  faceImg: undefined,
  sampleImg: undefined,
  result: {
    happy: undefined,
    surprise: undefined,
    angry: undefined,
    fear: undefined,
    sad: undefined,
    neutral: undefined,
  },
  feedback: {
    happy: undefined,
    surprise: undefined,
    angry: undefined,
    fear: undefined,
    sad: undefined,
    neutral: undefined,
  },
  deviation: undefined,
};

export const initialEmotionDropDown = {
  happy: false,
  surprise: false,
  angry: false,
  fear: false,
  sad: false,
};

export const emotion = [
  { korean: "기쁨", english: "happy" },
  { korean: "당황", english: "surprise" },
  { korean: "분노", english: "angry" },
  { korean: "불안", english: "fear" },
  { korean: "슬픔", english: "sad" },
];
