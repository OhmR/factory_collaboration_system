import { useState, useEffect } from 'react';
import TreeOrder from './components/TreeOrder';
import Layout from "../../components/Layout"
import OrderList from './components/OrderList';

const Task = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch("./order.json", {
      method: "GET",
    }).then(e => e.json())
      .then(e => {
        console.info("json data is ", e);
        setChartData(e.orders);
      })
  }, []);


  return (
    <Layout BreadcrumbName="Agency" content={
      chartData.length !== 0 ? <OrderList data={chartData} /> : null
    } />
  );
  // return (
  //   <Layout BreadcrumbName="Agency" content={
  //     chartData ? <TreeOrder data={chartData} /> : null
  //   } />
  // );
}

export default Task;