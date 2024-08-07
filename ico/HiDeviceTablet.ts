import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DeviceTablet icon from Heroicons
 * @module
 */
export function HiDeviceTablet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
}
export default HiDeviceTablet;
