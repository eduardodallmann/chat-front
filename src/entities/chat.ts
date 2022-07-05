export enum ChatTypeEnum {
  NEW = "NEW",
  EXIT = "EXIT",
  MSG = "MSG",
}

export type ChatType = {
  type: ChatTypeEnum;
  user: string;
  date: string;
  msg?: string;
};
