import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useAuth from 'app/hooks/useAuth'
import EditIcon from '@mui/icons-material/Edit'
const Subcategory = {
    Asset: {
        'Non-current': {
            'Property plant and equipment': [],
            'Deferred tax assets': [],
            Investment: [],
            'Other receivables': [],
            'Intangible assets and goodwill': [],
            'Biological assets': [],
            'Investment property': [],
        },
        Current: {
            Inventories: [],
            'Trade and other receivables': [],
            'prepayment and advances': [],
            'Cash and cash equivalent': [],
        },
    },
    'Equity and Liability': {
        'Non-current-Liability': {
            'Deferred Income': [],
            Provision: [],
            'Deferred tax liability': [],
            'Trade and other payables': [],
            'Loans and borrowings': [],
        },
        'Current-liability': {
            'Bank Overdraft': [],
            'Current tax liabilities': [],
            'Deferred Incomes': [],
            'Loans and borrowing': [],
            'Trade and other payable': [],
        },
        Equity: {
            'Capital and reserves': [],
            'Share capital': [],
            'Retained earnings': [],
            Reserves: [],
            'Share Premium': [],
        },
    },
    Income: {
        Revenue: [],
        'Cost of sales': [],
        'Other income': [],
        'Administrative and selling expenses': [],
        'Impairment loss on trade receivables': [],
        'Finance income': [],
        'Finance cost': [],
        'Minimum tax expense': [],
        Taxation: [],
        'Loss from discontinued operations': [],
    },
}

const ParentMapped = () => {
    const [categorizedData, setCategorizedData] = useState([])
    const [loading, setLoading] = useState(true)
    const { logout, user } = useAuth()
    const apiUrl = process.env.REACT_APP_API_URL

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('jwtToken')

                // Fetch categorized data
                const categorizedResponse = await axios.get(
                    `${apiUrl}/api/mapped-data`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )

                // Log the response data
                console.log(
                    'Categorized Data Response:',
                    categorizedResponse.data
                )

                // Update the state with the fetched categorized data
                setCategorizedData(categorizedResponse.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error)
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const flattenSubcategoryData = () => {
        let flattenedData = []

        for (let item of categorizedData) {
            for (let categoryKey in item.subcategory) {
                const category = item.subcategory[categoryKey]

                if (categoryKey === 'Income') {
                    // Handle Income category differently
                    for (let subCategoryKey in category) {
                        const subCategory = category[subCategoryKey]

                        if (
                            Array.isArray(subCategory) &&
                            subCategory.length > 0
                        ) {
                            subCategory.forEach((dataItem) => {
                                flattenedData.push({
                                    Category: categoryKey,
                                    Subcategory: subCategoryKey,
                                    ...dataItem,
                                })
                            })
                        }
                    }
                } else {
                    // Handle Asset and Equity and Liability categories
                    for (let subCategoryKey in category) {
                        const subCategory = category[subCategoryKey]

                        for (let subSubcategoryKey in subCategory) {
                            const subSubcategory =
                                subCategory[subSubcategoryKey]

                            if (
                                Array.isArray(subSubcategory) &&
                                subSubcategory.length > 0
                            ) {
                                subSubcategory.forEach((dataItem) => {
                                    flattenedData.push({
                                        Category: categoryKey,
                                        Subcategory: subCategoryKey,
                                        SubSubcategory: subSubcategoryKey,
                                        ...dataItem,
                                    })
                                })
                            }
                        }
                    }
                }
            }
        }

        return flattenedData
    }

    const flattenedData = flattenSubcategoryData()

    return (
        <div
            style={{ display: 'flex' }}
            className="containers bottom-scroll-container"
        >
            <div style={{ flexBasis: '50%' }}>
                <div
                    style={{
                        marginLeft: '40px',
                        marginTop: '40px',
                        marginBottom: '40px',
                        fontWeight: '800',
                    }}
                >
                    <h5>Ledger</h5>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : flattenedData.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Date</th>
                                <th>Details</th>
                                <th>Amount</th>
                                <th>Account ID</th>
                                {/*<th>Description</th>
                    <th>Prior Year</th>
    <th>KML</th>*/}
                            </tr>
                        </thead>
                        <tbody>
                            {flattenedData.map((data, index) => (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <EditIcon /> {/* Edit icon */}
                                    </td>

                                    <td>{data.Category}</td>
                                    <td>{data.Subcategory}</td>
                                    <td>{data.SubSubcategory}</td>
                                    <td>{data.Account_ID}</td>
                                    {/*} <td>{data.Description}</td>
                        <td>{data.prioryear}</td>
                <td>{data.KML}</td>*/}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No categorized data available.</p>
                )}
            </div>

            <div style={{ flexBasis: '50%', marginLeft: '50px' }}>
                <div
                    style={{
                        marginLeft: '40px',
                        marginTop: '40px',
                        marginBottom: '40px',
                        fontWeight: '800',
                    }}
                >
                    <h5>Statement</h5>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : flattenedData.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Date</th>
                                <th>Details</th>
                                <th>Amouunt</th>
                                <th>Account ID</th>
                                {/*<th>Description</th>
                        <th>Prior Year</th>
        <th>KML</th>*/}
                            </tr>
                        </thead>
                        <tbody>
                            {flattenedData.map((data, index) => (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <EditIcon /> {/* Edit icon */}
                                    </td>

                                    <td>{data.Category}</td>
                                    <td>{data.Subcategory}</td>
                                    <td>{data.SubSubcategory}</td>
                                    <td>{data.Account_ID}</td>
                                    {/*} <td>{data.Description}</td>
                            <td>{data.prioryear}</td>
                    <td>{data.KML}</td>*/}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No categorized data available.</p>
                )}
            </div>
        </div>
    )
}

export default ParentMapped
