declare const process: {
  env: {
    NEXT_PUBLIC_BACKEND_API_URL: string;
  };
};

export const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;
export const BACKEND_API_VERSION = "v0";
