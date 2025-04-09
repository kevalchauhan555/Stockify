import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders,setAllOrders] = useState([]);
    
    useEffect(()=>{
      axios.get('http://localhost:5000/allOrder').then((res)=>{
        setAllOrders(res.data);
      });
    },[]);
  return (
    <div className="orders">
      {allOrders ? 
      <div className="order-table">
        <table>
          <tr>
            <th>Stock Name</th>
            <th>Stock Qty</th>
            <th>Stock Price</th>
            <th>Purches Date</th>
          </tr>
          {allOrders.map((stock,index)=>{
            const date = new Date(stock.purchesAt).toLocaleDateString("en-GB");
            return(
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{date}</td>
              </tr>
            )
          })}
        </table>
      </div>
      :
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
}
    </div>
  );
};

export default Orders;