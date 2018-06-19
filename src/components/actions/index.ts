import { AppUpdateCountAction } from "./app";

export interface NullAction {
  type: TypeKeys.NULL;
}

export type ActionTypes = NullAction | AppUpdateCountAction;

export enum TypeKeys {
  NULL = "NULL",
  ERROR = "ERROR",
  APP_UPDATE_COUNT = "APP_UPDATE_COUNT"
}
