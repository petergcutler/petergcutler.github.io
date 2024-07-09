export class Work {
  id: number;
  url: string;
  display: string;
  description?: string;
  subtitle?: string;
  client?: string;
  team?: Array<string>;
  tags?: Array<string>;
  imageCredit?: object;
  data?: any;
}
