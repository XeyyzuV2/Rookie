// @ts-nocheck
import { default as __fd_glob_7 } from "../content/docs/installation/meta.json?collection=docs"
import { default as __fd_glob_6 } from "../content/docs/faq/meta.json?collection=docs"
import { default as __fd_glob_5 } from "../content/docs/meta.json?collection=docs"
import * as __fd_glob_4 from "../content/docs/installation/windows.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/installation/linux.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/faq/build-errors.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/configuration.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_5, "faq/meta.json": __fd_glob_6, "installation/meta.json": __fd_glob_7, }, {"configuration.mdx": __fd_glob_0, "index.mdx": __fd_glob_1, "faq/build-errors.mdx": __fd_glob_2, "installation/linux.mdx": __fd_glob_3, "installation/windows.mdx": __fd_glob_4, });