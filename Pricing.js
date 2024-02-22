import React from "react";
import '../Styles/pricing.css'
const Pricing = () => {
  // Dummy data for the table
  const dummyData = [
    { id: 1, orderNo: "ORD001", city: "New York", customerName: "John Doe", orderValue: "$100", status: "Pending" },
    { id: 2, orderNo: "ORD002", city: "Los Angeles", customerName: "Jane Smith", orderValue: "$150", status: "Shipped" },
    { id: 3, orderNo: "ORD003", city: "Chicago", customerName: "James Brown", orderValue: "$200", status: "Delivered" }
  ];

  return (
    <div>
      <div className="button-container">
        <div className="left-buttons">
          <button className="white-button">Import Order</button>
          <button className="white-button">Accept</button>
          <button className="white-button">Print</button>
        </div>
        <div className="right-buttons">
          <button className="refresh-button">Refresh</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /> Select</th>
            <th>Channel</th>
            <th>Order No</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item) => (
            <tr key={item.id}>
              <td><input type="checkbox" /></td>
              <td>Channel Data</td>
              <td>{item.orderNo}</td>
              <td>{item.city}</td>
              <td>{item.customerName}</td>
              <td>{item.orderValue}</td>
              <td>{item.status}</td>
              <td><button>Edit</button><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
