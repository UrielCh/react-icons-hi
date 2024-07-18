import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChartPie icon from Heroicons
 * @module
 */
export function HiChartPie(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}},{tag:"path",attr:{d:"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"},child:[]}]})(props);
}
export default HiChartPie;
