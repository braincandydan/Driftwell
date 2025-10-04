import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/Users/dandonnelly/Documents/Driftwell/tina/__generated__/.cache/1759536895465', url: 'http://localhost:4001/graphql', token: 'fallback', queries,  });
export default client;
  