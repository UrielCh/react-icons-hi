import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineInformationCircle icon from Heroicons
 * @module
 */
export function HiOutlineInformationCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
}
export default HiOutlineInformationCircle;
