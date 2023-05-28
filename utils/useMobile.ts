import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';

const useMobile = (): boolean => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return isMobile;
};

export default useMobile;
