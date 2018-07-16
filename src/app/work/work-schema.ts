export class Work {
  id: number;
  url: string;
  display: string;
  description?: string;
  client?: string;
  team?: Array<string>;
  tags?: Array<string>;
  imageCredit?: object;
  data?: object;
}
