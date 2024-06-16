import { headers } from "next/headers";

export const getUrlOnServer = () => {
  const stringParams = headers().get("queryParams");
  const pathname = headers().get("pathname");

  if (!stringParams || !pathname) {
    return {
      queryParams: {},
      pathname: "",
    };
  }

  const params = new URLSearchParams(stringParams);
  const queryParams: { [key: string]: string | string[] } = {};

  params.forEach((value, key) => {
    if (queryParams[key]) {
      if (Array.isArray(queryParams[key])) {
        (queryParams[key] as string[]).push(value);
      } else {
        queryParams[key] = [queryParams[key] as string, value];
      }
    } else {
      queryParams[key] = value;
    }
  });

  return {
    queryParams,
    pathname,
  };
};
