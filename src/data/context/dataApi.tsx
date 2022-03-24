import { Storage } from "@capacitor/storage";
import { AllModules } from "../../models/defaultModels";

const HAS_SEEN_TUTORIAL = "hasSeenTutorial";
const SUBSCRIPTIONS = "subscriptions";
const HOME_MODULES = "modules";

export const getUserData = async () => {
  const response = await Promise.all([
    Storage.get({ key: HAS_SEEN_TUTORIAL }),
    Storage.get({ key: SUBSCRIPTIONS }),
    Storage.get({ key: HOME_MODULES }),
  ]);
  const hasSeenTutorial = (await response[0].value) === "true";

  const subscriptionsString = (await response[1].value) ?? false;
  let selectedSubscriptions: number[] = [];
  if (subscriptionsString) {
    const subscriptionsData = JSON.parse(subscriptionsString);
    selectedSubscriptions = subscriptionsData.map((subscription: number) => {
      return subscription;
    });
  }

  const selectedHomeModulesString = (await response[2].value) ?? false;
  let selectedHomeModules: number[] = [];
  if (selectedHomeModulesString) {
    const selectedHomeModulesData = JSON.parse(selectedHomeModulesString);
    selectedHomeModules = selectedHomeModulesData.map((subscription: number) => {
      return subscription;
    });
  }

  return {
    selectedSubscriptions,
    selectedHomeModules,
    hasSeenTutorial,
  };
};

export const setSelectedSubscriptionsData = async (subscriptionItems: number[]) => {
  await Storage.set({ key: SUBSCRIPTIONS, value: JSON.stringify(subscriptionItems) });
};

export const setSelectedHomeModulesData = async (modules: AllModules[]) => {
  await Storage.set({ key: HOME_MODULES, value: JSON.stringify(modules) });
};

export const setHasSeenTutorialData = async (hasSeenTutorial: boolean) => {
  await Storage.set({ key: HAS_SEEN_TUTORIAL, value: JSON.stringify(hasSeenTutorial) });
};
