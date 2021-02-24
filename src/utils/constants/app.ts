import { getDate, timeAgo } from "../helpers/date";

// ---------- APP CONSTANTS
export const theme_cookie = "theme";
export const font_cookie = "font";
export const rsvp_cookie = "rsvp";

export const shower_date = "20210313T160000";
export const shower_end = "20210313T200000";

export const shower_time_until = timeAgo(shower_date);
export const shower_full_date = getDate(shower_date);
export const shower_location = "1206 W Sherwood Lane, Broken Arrow, OK 74011";
export const shower_location_link = `https://www.google.com/maps/search/?api=1&query=${shower_location}`;

const title = "Caroline%20and%20Sam's%20Baby%20Shower";
const details = `${title} | Welcoming the life of baby Cairo :) %0D%0A%0D%0AWhen:%20${shower_full_date}%0D%0AWhere:%20${shower_location}%0D%0A`;

export const shower_add_calender = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title} :)&dates=${shower_date}/${shower_end}&details=${details}&location=${shower_location}&ctz=America/Chicago`;
