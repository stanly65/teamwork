import {bootstrap} from "./framework/core/bootstrap"
import {appModule} from "./app/app.module";
import { wfm } from "./framework/tools/util" //?

wfm.delay().then(()=> {
    bootstrap(appModule)
})


