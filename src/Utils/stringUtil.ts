export class stringUtil {
  static formatMinutesToHoursMinutes(allMinutes: number) : string {
    const hours = Math.floor(allMinutes/60);
    const minutes = allMinutes%60;

    return `${hours}h ${minutes}min`;
  }
}
