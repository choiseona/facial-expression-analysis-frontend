import { AnimationControls } from "framer-motion";

export interface SampleType {
  id: number | undefined;
  sampleImg: string | undefined;
  comment: string | undefined;
}

export interface EmotionType {
  happy: number;
  surprise: number;
  angry: number;
  fear: number;
  sad: number;
}

export interface ResultType {
  faceImg: string | undefined;
  sampleImg: string | undefined;
  result: {
    happy: number | undefined;
    surprise: number | undefined;
    angry: number | undefined;
    fear: number | undefined;
    sad: number | undefined;
    neutral: number | undefined;
  };
  feedback: {
    happy: number | undefined;
    surprise: number | undefined;
    angry: number | undefined;
    fear: number | undefined;
    sad: number | undefined;
    neutral: number | undefined;
  };
  deviation: number | undefined;
}

export interface DropdownOpenType {
  happy: boolean;
  surprise: boolean;
  angry: boolean;
  fear: boolean;
  sad: boolean;
}

export interface DropdownControlsType {
  happy: AnimationControls;
  surprise: AnimationControls;
  angry: AnimationControls;
  fear: AnimationControls;
  sad: AnimationControls;
}
