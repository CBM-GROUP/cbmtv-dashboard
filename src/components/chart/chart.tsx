import { mergeClasses } from 'minimal-shared/utils';

import { styled } from '@mui/material/styles';

import { chartClasses } from './classes';

import type { ChartProps } from './types';

// ----------------------------------------------------------------------

export function Chart({ className, sx, ...other }: ChartProps) {
  return (
    <ChartRoot
      dir="ltr"
      className={mergeClasses([chartClasses.root, className])}
      sx={sx}
      {...other}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        Chart is temporarily unavailable
      </div>
    </ChartRoot>
  );
}

// ----------------------------------------------------------------------

const ChartRoot = styled('div')(({ theme }) => ({
  width: '100%',
  flexShrink: 0,
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
}));
