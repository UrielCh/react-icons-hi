import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineShoppingBag icon from Heroicons
 * @module
 */
export function HiOutlineShoppingBag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"}}]})(props);
}
export default HiOutlineShoppingBag;
