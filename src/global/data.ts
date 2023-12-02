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

export const testSample = [
  {
    id: 1,
    sampleImg: "/src/assets/image/sample1.jpg",
    comment: "test1",
  },
  {
    id: 2,
    sampleImg: "/src/assets/image/sample2.jpg",
    comment: "test2",
  },
  {
    id: 3,
    sampleImg: "/src/assets/image/sample3.jpg",
    comment: "test3",
  },
];

export const testResult = [
  {
    sampleImg: "/src/assets/image/sample1.jpg",
    faceImg: "/src/assets/image/sample1.jpg",
    result: {
      happy: 0.1,
      surprise: 0.1,
      angry: 0.1,
      fear: 0.1,
      sad: 0.1,
      neutral: 0.1,
    },
    feedback: {
      happy: 0.2,
      surprise: 0.2,
      angry: 0.2,
      fear: 0.2,
      sad: 0.2,
      neutral: 0.2,
    },
    deviation: 10,
  },
  {
    sampleImg: "/src/assets/image/sample2.jpg",
    faceImg: "/src/assets/image/sample2.jpg",
    result: {
      happy: 0.2,
      surprise: 0.2,
      angry: 0.2,
      fear: 0.2,
      sad: 0.2,
      neutral: 0.2,
    },
    feedback: {
      happy: 0.3,
      surprise: 0.3,
      angry: 0.3,
      fear: 0.3,
      sad: 0.3,
      neutral: 0.3,
    },
    deviation: 20,
  },
  {
    sampleImg: "/src/assets/image/sample3.jpg",
    faceImg: "/src/assets/image/sample3.jpg",
    result: {
      happy: 0.3,
      surprise: 0.3,
      angry: 0.3,
      fear: 0.3,
      sad: 0.3,
      neutral: 0.3,
    },
    feedback: {
      happy: 0.4,
      surprise: 0.4,
      angry: 0.4,
      fear: 0.4,
      sad: 0.4,
      neutral: 0.4,
    },
    deviation: 30,
  },
];
