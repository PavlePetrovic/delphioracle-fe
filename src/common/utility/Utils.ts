import { type FC } from "react";

export const isObjEmpty = (obj: any) => {
  if (!obj || Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};

export const isStringEmpty = (string: string) =>
  !!(
    typeof string === "object" ||
    !string ||
    string.length === 0 ||
    string.trim().length === 0
  );

export const formatDateAndTime = (
  value: string,
  formatting: {
    month: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
    day: "numeric" | "2-digit" | undefined;
    year: "numeric" | "2-digit" | undefined;
  },
) => {
  if (!value) return value;
  return new Intl.DateTimeFormat("en-US", {
    ...formatting,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(value));
};

export const formatDate = (date: string) => {
  if (date) {
    const d = new Date(date);
    const year = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
      d,
    );
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      d,
    );
    const day = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(d);

    return `${month} ${day}. ${year}.`;
  } else {
    return null;
  }
};

export const validatePassword = (string: string) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  return !(
    typeof string === "object" ||
    !string ||
    string.length === 0 ||
    string.trim().length === 0 ||
    !regex.test(string)
  );
};

export const validateEmail = (email: string): boolean => {
  if (
    String(email)
      .toLowerCase()
      .match(
        // new regex
        /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      )
  ) {
    return true;
  } else {
    return false;
  }
};

const hasRefreshed = () => {
  const refreshed: string | null = window.sessionStorage.getItem(
    "retry-lazy-refreshed",
  );
  return refreshed !== null ? JSON.parse(refreshed) : false;
};

// lazyRetry function prevents chunkLoad Errors if app is updated and client's page is not refreshed
// this works only with route-based code splitting
export const lazyRetry = function (
  componentImport: () => Promise<FC | any>,
): Promise<FC | any> {
  return new Promise((resolve, reject) => {
    const refreshed: boolean = hasRefreshed();

    // try to import the component
    componentImport()
      .then((component: FC) => {
        window.sessionStorage.setItem("retry-lazy-refreshed", "false"); // success so reset the refresh
        resolve(component);
      })
      .catch((error: any) => {
        if (!refreshed) {
          // not been refreshed yet
          window.sessionStorage.setItem("retry-lazy-refreshed", "true"); // we are now going to refresh
          window.location.reload();
          return; // refresh the page
        }

        reject(() => {
          window.location.href = "/";
        }); // there was an error
        // window.location.href = "/";
      });
  });
};

export function getBrowser(agent: string) {
  console.log(agent);
  let agentFormatted = agent?.toLocaleLowerCase();
  switch (true) {
    case agentFormatted.indexOf("edge") > -1:
      return { value: "ms-edge", human: "MS Edge" };
    case agentFormatted.indexOf("edg/") > -1:
      return { value: "edge-chromium", human: "Edge" };
    case agentFormatted.indexOf("opr") > -1 ||
      navigator.userAgent.indexOf("OPR"):
      return { value: "opera", human: "Opera" };
    case agentFormatted.indexOf("chrome") > -1:
      return { value: "chrome", human: "Chrome" };
    case agentFormatted.indexOf("trident") > -1:
      return { value: "ms-ie", human: "MS IE" };
    case agentFormatted.indexOf("firefox") > -1:
      return { value: "mozilla", human: "Mozilla Firefox" };
    // case agentFormatted.indexOf("mozilla") > -1:
    //   return { value: "mozilla", human: "Mozilla Firefox" };
    case agentFormatted.indexOf("safari") > -1:
      return { value: "safari", human: "Safari" };
    default:
      return { value: "other", human: "" };
  }
}

export function getBrowserName() {
  const agent = window.navigator.userAgent.toLowerCase();

  return getBrowser(agent);
}

export const getTime = (value: Date) => {
  if (!value) return value;
  let date = value;

  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
};

// format Time to AM/PM
export const formatTime = (value: Date | string) => {
  let date: Date;

  if (value instanceof Date) {
    date = value;
  } else if (typeof value === "string") {
    date = new Date(value);
  } else {
    throw new Error("Invalid input type. Must be a Date object or a string.");
  }

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let AmPm = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes} ${AmPm}`;
};

export const isDateValid = (givenDate: Date, expiredDate: Date) => {
  if (givenDate.getTime() <= expiredDate.getTime()) {
    return true;
  }
  return false;
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const formatText = (answer: string) => {
  let formatedText =
    "<span>" + answer.split("\n").join("</span><span>") + "</span>";

  return formatedText;
};

export const resolveKnowledgeLevel = (level: string) => {
  if (level == "Beginner") {
    return "Simple Daily Language";
  } else if (level == "Intermediate") {
    return "Moderate Astrology";
  } else if (level == "Advanced") {
    return "Expert Level";
  } else {
    return "";
  }
};

export const markdownToText = (markdown: string) => {
  return markdown
    .replace(/[#*_`>-]/g, "") // Remove Markdown symbols
    .replace(/\[(.*?)\]\(.*?\)/g, "$1"); // Convert [text](link) → text
  // .replace(/\n{2,}/g, "\n"); // Normalize multiple new lines
};
