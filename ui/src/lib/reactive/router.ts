import type { Router, RouterState } from "@openclaw/uirouter";
import { projectOwner } from "./projection.ts";

/** Matching, loading, history, and route retirement remain router-owned. */
export function projectRouter<Id extends string, Context, Module, Data>(
  router: Pick<Router<Id, Context, Module, Data>, "getState" | "subscribe">,
) {
  return projectOwner(router, (source): RouterState<Id, Module, Data> => source.getState());
}
