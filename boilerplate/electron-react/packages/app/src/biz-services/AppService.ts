import { BizServiceContext } from "./BizServiceContext";

export class AppService {
  hasLogin: boolean = false;
  state: AppState = AppState.UN_LOGIN;

  constructor(readonly context: BizServiceContext) {}

  checkLogin() {
    if (this.context.storage.getItem("user")) {
      this.hasLogin = true;
      this.state = AppState.HOME;
    }
  }

  loginByCode(code: string) {}
}

export enum AppState {
  /** 未登录 */
  UN_LOGIN,
  /** 正在登录 */
  LOGIN,
  /** 首页 */
  HOME,
}
