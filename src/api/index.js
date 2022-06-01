import instance from "./axios";

import authModule from "./auth";

export default {
  auth: authModule(instance),
};
