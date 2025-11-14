import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function BreadcrumbsComponent() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  const pathSegments = pathname.split('/').filter((i) => i);

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb">
        <MuiLink component={Link} underline="hover" color="inherit" href="/">
          Dashboard
        </MuiLink>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const formattedSegment = capitalize(segment.replace(/-/g, ' '));

          return isLast ? (
            <Typography key={href} color="text.primary">
              {formattedSegment}
            </Typography>
          ) : (
            <MuiLink
              key={href}
              component={Link}
              underline="hover"
              color="inherit"
              href={href}
            >
              {formattedSegment}
            </MuiLink>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
