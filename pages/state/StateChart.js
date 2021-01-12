import { Chart } from "@antv/g2";
import { useRef } from "react"

const StateChart = (props) => {
    const { data } = props;
    const chartRef = useRef(null);
    if (chartRef.current) {
        chartRef.current.destroy();
    }

    if (data === undefined) {
        return null;
    }
    const chart = new Chart({
        container: "container",
        autoFit: true,
        // width: 1000,
        height: 500,
        padding: [30, 20, 70, 30]
    })
    chart.data(data);
    chart.tooltip({
        showCrosshairs: true,
        // shared: true,
    });
    chart.scale({
        num: {
            min: 0,
            nice: true
        }
    });

    // chart.axis('failed', false);

    chart.legend("finish", {
        title: '完成订单数'
    })
    // chart.legend({
    //     custom: true,
    //     items: [
    //         { name: '完成订单数', value: 'num' },
    //         { name: '超时订单数', value: 'num' },
    //     ],
    // });
    chart.line().position('date*num').color("state");
    // chart.line().position('date*finish').color('#1890ff');
    // chart.line().position('date*failed').color('red');
    chartRef.current = chart;
    chart.render();

    return null;
    // return <div id="container"></div>;
};

export default StateChart;