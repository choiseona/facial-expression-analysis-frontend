import { atom } from "jotai";
import { initialEmotion, initialResult, initialSample } from "./data";
import { EmotionType, ResultType, SampleType } from "./type";

export const idsAtom = atom<number[]>([]);
export const stepAtom = atom<number>(1);
export const samplesAtom = atom<SampleType[]>([initialSample]);
export const capturedImagesAtom = atom<string[]>([]);
export const imageLoadedAtom = atom<boolean>(false);
export const emotionTFAtom = atom<boolean>(true);
export const detailEmotionAtom = atom<EmotionType>(initialEmotion);
export const resultStepAtom = atom<number>(1);
export const resultsAtom = atom<ResultType[]>([initialResult]);
