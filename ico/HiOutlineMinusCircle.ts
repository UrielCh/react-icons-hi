import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineMinusCircle icon from Heroicons
 * @module
 */
export function HiOutlineMinusCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
}
export default HiOutlineMinusCircle;
