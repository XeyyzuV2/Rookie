// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"configuration.mdx": () => import("../content/docs/configuration.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "faq/build-errors.mdx": () => import("../content/docs/faq/build-errors.mdx?collection=docs"), "installation/linux.mdx": () => import("../content/docs/installation/linux.mdx?collection=docs"), "installation/windows.mdx": () => import("../content/docs/installation/windows.mdx?collection=docs"), }),
};
export default browserCollections;