import type { Theme, SxProps } from '@mui/material/styles';
// ----------------------------------------------------------------------

export type ChartOptions = {
  colors?: string[];
  labels?: string[];
  [key: string]: unknown;
};

export type ChartProps = React.ComponentProps<'div'> & {
  type?: 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'candlestick' | 'boxPlot' | 'radar' | 'polarArea' | 'rangeBar' | 'rangeArea' | 'treemap';
  series?: unknown[];
  options?: ChartOptions;
  sx?: SxProps<Theme>;
  slotProps?: {
    loading?: SxProps<Theme>;
  };
};
