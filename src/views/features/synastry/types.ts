import {
  messageType,
  userInfoType,
  userReport,
} from "@/views/appTypes/universal";

export type synastryChatThreadType = {
  thread_info: {
    thread_id: string;
    other_person_report: userReport;
    other_person_info: userInfoType;
  };
  messages: Array<messageType>;
  processing: boolean;
};

export interface synastryListType {
  threads: Array<synastryChatThreadType>;
  adding_partner_processing_flag: boolean;
}

// export interface synastryListType {

// }
