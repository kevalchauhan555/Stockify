import { BarChartOutlined, MoreHoriz } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import GeneralContext from "./GeneralContext";
import React, { useContext } from 'react'

function WatchListActions({uid}) {
    const generalContext = useContext(GeneralContext);
    const handleBuyClick = () => {
      generalContext.openBuyWindow(uid);
    };
  
  return (
    <span className="actions">
    <span>
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        onClick={handleBuyClick}
      >
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
      >
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
      >
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  </span>
  )
}

export default WatchListActions