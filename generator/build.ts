import * as fs from "fs";
import * as os from "os";

import { API_DEFINITIONS_DIR } from "./config";

fs.readdirSync(API_DEFINITIONS_DIR).forEach(file => {
    console.debug(file);
});
