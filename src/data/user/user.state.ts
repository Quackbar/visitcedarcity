export interface UserState {
    isLoggedin: boolean;
    username?: string;
    darkMode: boolean;
    hasSeenTutorial: boolean;
    loading: boolean;
  };
  

export interface WeatherState {
    BrianHeadTemp: string;
    BrianHeadImg: string;
    CedarTemp: string;
    CedarImg: string;
    ParoTemp: string;
    ParoImg: string;
};
  