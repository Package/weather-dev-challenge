import dayjs from "dayjs";

export function formatDate(dateString: string, dayOffset?: number): string {
  if (dayOffset === 0) {
    return "Tomorrow";
  }

  return dayjs(dateString).format("ddd, D MMM");
}
