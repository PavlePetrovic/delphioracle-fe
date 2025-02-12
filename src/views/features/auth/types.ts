import { accountInfoType, userInfoType } from "@appTypes/universal";

export interface internalAuthData {
  user_id: string;
  credits: number;
  email: string;
  account_info: accountInfoType;
  user_info: userInfoType;
  referral_code: string;
  createdAt: string;
  expiredAt: string;
}
