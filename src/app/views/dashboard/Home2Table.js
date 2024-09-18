import {
    Box,
    Icon,
    IconButton,
    styled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material'

const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
    },
    '& tbody': {
        '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
    },
}))

const subscribarList = [
    {
        name: 'john doe',
        date: '18 january, 2019',
        amount: 1000,
        status: 'close',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'kessy bryan',
        date: '10 january, 2019',
        amount: 9000,
        status: 'open',
        company: 'My Fintech LTD.',
    },
    {
        name: 'james cassegne',
        date: '8 january, 2019',
        amount: 5000,
        status: 'close',
        company: 'Collboy Tech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
]

const Home2Table = () => {
    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell
                            align="left"
                            style={{
                                backgroundColor: '#2d5893',
                                color: 'white',
                            }}
                        >
                            Account Information
                        </TableCell>
                        <TableCell
                            align="center"
                            style={{
                                backgroundColor: '#2d5893',
                                color: 'white',
                            }}
                        >
                            Count
                        </TableCell>
                        <TableCell
                            align="center"
                            style={{
                                backgroundColor: '#2d5893',
                                color: 'white',
                            }}
                        >
                            Value
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {subscribarList.map((subscriber, index) => (
                        <TableRow key={index}>
                            <TableCell
                                align="left"
                                style={{
                                    backgroundColor: '#2d5893',
                                    color: 'white',
                                }}
                            >
                                {subscriber.name}
                            </TableCell>
                            <TableCell
                                align="center"
                                style={{
                                    backgroundColor: '#2d5893',
                                    color: 'white',
                                }}
                            >
                                {subscriber.company}
                            </TableCell>
                            <TableCell
                                align="center"
                                style={{
                                    backgroundColor: '#2d5893',
                                    color: 'white',
                                }}
                            >
                                {subscriber.amout}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default Home2Table
