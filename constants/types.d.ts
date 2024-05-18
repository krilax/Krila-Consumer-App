import { ReactNode } from "react";


export interface SvgProps extends Partial<SVGProps<SVGSVGElement>> {
  fillColor?: string | null;
}