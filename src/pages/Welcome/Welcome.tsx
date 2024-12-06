import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { headerContainer } from './styles';

const Welcome = () => (
  <Grid sx={headerContainer}>
    <Typography>Welcome to Waypoint</Typography>
  </Grid>
);

export default Welcome;
