export interface DateServiceInterface {
  geDateAsYYYYmmDD(date: string): string | undefined;
  geDateAsYYYYmmDDV2(date: string): string | undefined;
}
