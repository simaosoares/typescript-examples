export interface DateServiceInterface {
  geDateAsYYYYmmDD(date: string): string | undefined;
  geDateAsYYYYmmDDV2(date: string): string | undefined;
  geDateTimeWithZone(date: string, zone: string): string | undefined | null;
}
