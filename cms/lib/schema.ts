import { makeSchema } from "@nexus/schema";
import path from "path";
import * as types from "./allTypes";

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(process.cwd(), "schema.graphql"),
    typegen: path.join(process.cwd(), "cms", "lib", "generated", "nexus.ts"),
  },
  typegenAutoConfig: {
    sources: [
      {
        alias: "faces",
        source: path.join(process.cwd(), "cms", "lib", "interfaces.ts"),
        typeMatch: (type) => new RegExp(`(${type}Interface)`),
      },
    ],
    backingTypeMap: {
      Date: "Date",
      URL: "URL",
    },
    debug: process.env.NODE_ENV === "development",
  },
});
