import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function HiMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
}
export default HiMinus;
