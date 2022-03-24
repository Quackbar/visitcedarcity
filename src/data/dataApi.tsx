import { Storage } from "@capacitor/storage";

const HAS_SEEN_TUTORIAL = "hasSeenTutorial";

export const getUserData = async () => {
  const response = await Promise.all([Storage.get({ key: HAS_SEEN_TUTORIAL })]);
  const hasSeenTutorial = (await response[0].value) === "true";
  return {
    hasSeenTutorial,
  };
};

export const setHasSeenTutorialData = async (hasSeenTutorial: boolean) => {
  await Storage.set({ key: HAS_SEEN_TUTORIAL, value: JSON.stringify(hasSeenTutorial) });
};
