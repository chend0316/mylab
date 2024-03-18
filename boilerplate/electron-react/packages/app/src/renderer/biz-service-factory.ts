import { AppService } from "../biz-services/appService";

function createBizService() {
  const app = new AppService({ storage: localStorage });
}
