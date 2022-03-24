import { Storage } from "@capacitor/storage";

const HAS_SEEN_TUTORIAL = "hasSeenTutorial";
const SUBSCRIPTIONS = "subscriptions";

export const getUserData = async () => {
  const response = await Promise.all([Storage.get({ key: HAS_SEEN_TUTORIAL }), Storage.get({ key: SUBSCRIPTIONS })]);
  const hasSeenTutorial = (await response[0].value) === "true";

  const subscriptionsString = (await response[1].value) ?? false;
  let selectedSubscriptions: number[] = [];
  if (subscriptionsString) {
    const subscriptionsData = JSON.parse(subscriptionsString);
    selectedSubscriptions = subscriptionsData.map((subscription: number) => {
      return subscription;
    });
  }

  return {
    selectedSubscriptions,
    hasSeenTutorial,
  };
};

export const setSelectedSubscriptionsData = async (subscriptionItems: number[]) => {
  await Storage.set({ key: SUBSCRIPTIONS, value: JSON.stringify(subscriptionItems) });
};

export const setHasSeenTutorialData = async (hasSeenTutorial: boolean) => {
  await Storage.set({ key: HAS_SEEN_TUTORIAL, value: JSON.stringify(hasSeenTutorial) });
};
