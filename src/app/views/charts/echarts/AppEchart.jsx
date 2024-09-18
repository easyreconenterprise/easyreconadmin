import { Box, styled, useTheme } from '@mui/material'
import Breadcrumb from 'app/components/Breadcrumb'
import SimpleCard from 'app/components/SimpleCard'
import AreaChart from './AreaChart'
import ComparisonChart from './ComparisonChart'
import DoughnutChart from './Doughnut'
import LineChart from './LineChart'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const AppEchart = () => {
    const theme = useTheme()
    return (
        <Container>
            <SimpleCard title="Amout (NGN)">
                <ComparisonChart
                    height="350px"
                    color={[
                        theme.palette.primary.dark,
                        theme.palette.primary.light,
                    ]}
                />
            </SimpleCard>

            <SimpleCard title="Ledger Item Match Rate">
                <DoughnutChart
                    height="350px"
                    color={[
                        theme.palette.primary.dark,
                        theme.palette.primary.main,
                        theme.palette.primary.light,
                    ]}
                />
                <DoughnutChart
                    height="350px"
                    color={[
                        theme.palette.primary.dark,
                        theme.palette.primary.main,
                        theme.palette.primary.light,
                    ]}
                />
            </SimpleCard>

            {/*<SimpleCard title="Line Chart">
        <LineChart
          height="350px"
          color={[theme.palette.primary.main, theme.palette.primary.light]}
        />
        </SimpleCard>*/}

            {/*<SimpleCard title="Area Chart">
        <AreaChart height="350px" color={[theme.palette.primary.main]} />
        </SimpleCard>*/}
        </Container>
    )
}

export default AppEchart
