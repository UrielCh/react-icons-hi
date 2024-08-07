import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Newspaper icon from Heroicons
 * @module
 */
export function HiNewspaper(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z","clipRule":"evenodd"}},{tag:"path",attr:{d:"M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"},child:[]}]})(props);
}
export default HiNewspaper;
