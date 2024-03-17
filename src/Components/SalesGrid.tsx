import React, { useState } from "react"
import '../styles/Styles.css'

export default function SalesGrid(props: any) {

    const [sortConfig, setSortConfig] = useState({ columnKey: null, sortDirection: 'asc' });

    const sortColumn = (columnKey) => {
        let dir = 'asc';
        if (sortConfig != null && sortConfig.columnKey === columnKey && sortConfig.sortDirection === 'asc') {
            dir = 'desc';
        }
        setSortConfig({columnKey, sortDirection: dir});
    }

    const salesData = React.useMemo(() => {
        let salesData = [...props.salesData];

        if (sortConfig.columnKey !== null) {

            // re-arrange a single column according the currently selected 
            // column key
            const column = sortConfig.columnKey;
            salesData.sort((a, b) => {
            if (a[column] < b[column]) {
              return sortConfig.sortDirection === 'asc' ? -1 : 1;
            }
            if (a[column] > b[column]) {
              return sortConfig.sortDirection === 'asc' ? 1 : -1;
            }
            return 0;
          });
        }

        return salesData;
      }, [props, sortConfig]);

    return(
        <table>
            <thead>
                <tr>
                <th onClick={() => sortColumn('weekEnding')}>
                    Week Ending {sortConfig.columnKey === 'weekEnding' && (sortConfig.sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => sortColumn('retailSales')}>
                    Retail Sales {sortConfig.columnKey === 'retailSales' && (sortConfig.sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => sortColumn('wholesaleSales')}>
                    Wholesale Sales {sortConfig.columnKey === 'wholesaleSales' && (sortConfig.sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => sortColumn('unitsSold')}>
                    Units Sold {sortConfig.columnKey === 'unitsSold' && (sortConfig.sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => sortColumn('retailerMargin')}>
                    Retailer Margin {sortConfig.columnKey === 'retailerMargin' && (sortConfig.sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                </tr>
            </thead>
            {
                salesData.map((week: any, index: number)=> {
                    return(
                        <tr key={index}>
                            <td>{week.weekEnding}</td>
                            <td>{week.retailSales}</td>
                            <td>{week.wholesaleSales}</td>
                            <td>{week.unitsSold}</td>
                            <td>{week.retailerMargin}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}