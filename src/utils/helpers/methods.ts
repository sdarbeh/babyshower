import Cookies from "js-cookie";

import { theme_cookie, font_cookie, rsvp_cookie } from "../constants/app";
// all methods thats not relating to texts

/// ------------------------- Clears all app cookies
export const clearCookies = () => {
  // removes token, theming and user font size
  Cookies.remove(theme_cookie);
  Cookies.remove(font_cookie);
  Cookies.remove(rsvp_cookie);
};

export const objToArr = (obj: any) =>
  Object.keys(obj).map((key) => [Number(key), obj[key]]);

export const isObjEmpty = (obj: any) => Object.keys(obj).length === 0;

export const routeActive = (route: string, path: string) =>
  route === path ? 1 : 0;

