import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small, H3 } from 'app/components/Typography';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: '500',
  color: theme.palette.primary.main,
}));

const StatCards = () => {
  const cardList = [
    { name: 'project', amount: 'New project' },
    { name: 'open', amount: 'Open Project' },
    { name: 'Attendance', amount: 'total attendance' },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
      <Grid item xs={4} md={4}>
        <StyledCard elevation={6}>
          <ContentBox>
            <h5>
              <a style={{ fontSize: '15px', color: 'black' }} href="/dashboard/trial-balance">
                Create a New Project
              </a>
            </h5>
          </ContentBox>
        </StyledCard>
      </Grid>
      <Grid item xs={4} md={4}>
        <StyledCard elevation={6}>
          <ContentBox>
            <h5>
              <a style={{ fontSize: '15px', color: 'black' }} href="">
                Open Existing project
              </a>
            </h5>
          </ContentBox>
        </StyledCard>
      </Grid>
      <Grid item xs={4} md={4}>
        <StyledCard elevation={6}>
          <ContentBox>
            <h5>
              <a style={{ fontSize: '15px', color: 'black' }} href="">
                Other Projects
              </a>
            </h5>
          </ContentBox>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default StatCards;
