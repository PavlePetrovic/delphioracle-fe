export type surveyValuesTypes = "Beginner" | "Intermediate" | "Advanced";

export interface userInfoType {
  name: string;
  surname: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  city: string;
  gender: string;
  lat: string;
  lon: string;
  timezone: string;
  timezone_value: string;
  knowledge_level: string;
}

export type messageType = {
  message: string;
  from: "bot" | "user";
  created_at: number;
};

export type threadType = {
  messages: Array<messageType>;
  thread_info: {
    thread_id: string;
    other_person_info: userInfoType;
  };
  processing: boolean;
};

export type accountInfoType = {
  credits: number;
  invited_users: Array<string>;
  referred_users: Array<string>;
  invited_through_referral_code: string;
  package_status: "free" | "paid";
  user_info: userInfoType;
  report: {
    profile_stats: {
      ascendant: string;
      moon: string;
      modality: Array<string | number>;
      sun: string;
      element: Array<string | number>;
      polarity: {
        yin: number;
      };
    };
  };
};

export type dailyQuoteType = {
  generating_daily_quotes: boolean;
  daily_quotes_list: Array<string>;
  last_day: number;
  thread_id: string;
};

export interface chatDataType {
  user_id: string;
  main_thread: threadType;
  account_info: accountInfoType;
  daily_quotes: dailyQuoteType;
  createdAt: number;
  expiredAt: number;
  adding_partner_processing_flag: boolean;
  email: string;
  referral_code: string;
  processing: boolean;
}
