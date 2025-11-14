import Box from '@mui/material/Box';
import Image from 'next/image';

export function Logo() {
  return (
    <Box sx={{ p: 2 }}>
      <Image
        src="/cbmtvwhitelogo.png"
        alt="CBM TV Logo"
        width={120}
        height={40}
        style={{
          filter: 'invert(1)',
        }}
      />
    </Box>
  );
}
