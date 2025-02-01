import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  Authorization: `${localStorage.getItem("delphiAccessToken")}`,
};

if (!navigator.onLine) {
  console.log("No internet.");
  // navigate("/no-internet")
}

class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: "",
      headers,
      withCredentials: false,
    });

    this.instance = http;
    return http;
  }

  async request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return await this.http.request(config);
  }

  async get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return await this.http.get<T, R>(url, config);
  }

  async post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return await this.http.post<T, R>(url, data, config);
  }

  async put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return await this.http.put<T, R>(url, data, config);
  }

  async patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return await this.http.patch<T, R>(url, data, config);
  }

  async delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return await this.http.delete<T, R>(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private async handleError(error: any, http: AxiosInstance) {
    if (axios.isAxiosError(error)) {
      // Access to config, request, and response
      console.log("Axios error:");
    } else {
      // Just a stock error
      console.log("Stock error");
    }
    const { status, config } = error;
    const originalConfig = config;

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        window.location.href = "/error";
        break;
      }
      case StatusCode.NotFound: {
        // Handle NotFound
        if (config.method.toLowerCase() === "get") {
          window.location.href = `/not-found`;
        }
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        window.location.href = "/not-found";
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        window.location.href = "/error";
        break;
      }
    }

    return await Promise.reject(error);
  }
}

const http = new Http();

export { http };
