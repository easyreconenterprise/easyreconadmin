import { useTheme } from '@mui/system'
import ReactEcharts from 'echarts-for-react'

const ComparisonChart = ({ height, color = [] }) => {
    const theme = useTheme()

    const option = {
        grid: { top: '10%', bottom: '10%', right: '5%' },
        legend: { show: false },
        color: ['#223388', 'rgba(34, 51, 136, 0.8)'],
        barGap: 0,
        barMaxWidth: '64px',
        dataset: {
            source: [
                ['Month', 'Website', 'App'],
                ['Ledger', 2200, 1200],
                ['Statement', 800, 500],
            ],
        },
        xAxis: {
            type: 'category',
            axisLine: { show: false },
            splitLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                fontSize: 13,
                fontFamily: 'roboto',
                color: theme.palette.text.secondary,
            },
        },
        yAxis: {
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: {
                lineStyle: {
                    color: theme.palette.text.secondary,
                    opacity: 0.15,
                },
            },
            axisLabel: {
                fontSize: 13,
                fontFamily: 'roboto',
                color: theme.palette.text.secondary,
            },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }],
    }

    return <ReactEcharts style={{ height: height }} option={{ ...option }} />
}

export default ComparisonChart
