export interface profileData {
  report: {
    ascendant: string;
    moon: string;
    sun: string;
  };
}

export interface profileType {
  profileData: {
    value: profileData | null;
    loading: boolean;
    error: any;
  };
  profileSettings: {
    value: null;
    loading: boolean;
    processing: boolean;
  };
}
