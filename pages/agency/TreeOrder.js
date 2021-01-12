import React, { useRef, useEffect } from "react"
import * as echarts from "echarts"
let data = JSON.parse("{\n" +
  "  \"name\": \"Order:1\",\n" +
  "  \"Product\": [{ \"name\": \"桌子\", \"value\": 2 }],\n" +
  "  \"percentage\": \"6%\",\n" +
  "  \"children\": [\n" +
  "    {\n" +
  "      \"name\": \"桌子\",\n" +
  "      \"num\": 2,\n" +
  "      \"percentage\": 0,\n" +
  "      \"children\": [\n" +
  "        {\n" +
  "          \"name\": \"上漆\",\n" +
  "          \"num\": 2,\n" +
  "          \"percentage\": 0,\n" +
  "          \"children\": [\n" +
  "            {\n" +
  "              \"name\": \"组装\",\n" +
  "              \"num\": 2,\n" +
  "              \"percentage\": 0,\n" +
  "              \"children\": [\n" +
  "                {\n" +
  "                  \"name\": \"桌子面\",\n" +
  "                  \"num\": 2,\n" +
  "                  \"children\": [],\n" +
  "                  \"subTask\": [\n" +
  "                    {\n" +
  "                      \"FactoryId\": 1,\n" +
  "                      \"num\": 1,\n" +
  "                      \"process\": \"40%\"\n" +
  "                    },\n" +
  "                    {\n" +
  "                      \"FactoryId\": 2,\n" +
  "                      \"num\": 1,\n" +
  "                      \"process\": \"20%\"\n" +
  "                    }\n" +
  "                  ]\n" +
  "                },\n" +
  "                {\n" +
  "                  \"name\": \"桌子腿\",\n" +
  "                  \"num\": \"8\",\n" +
  "                  \"children\": [],\n" +
  "                  \"subTask\": [\n" +
  "                    {\n" +
  "                      \"FactoryId\": 3,\n" +
  "                      \"num\": 4,\n" +
  "                      \"process\": \"60%\"\n" +
  "                    },\n" +
  "                    {\n" +
  "                      \"FactoryId\": 4,\n" +
  "                      \"num\": 4,\n" +
  "                      \"process\": \"0%\"\n" +
  "                    }\n" +
  "                  ]\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ]\n" +
  "        }\n" +
  "      ]\n" +
  "    }\n" +
  "  ]\n" +
  "}\n")
export default function Chart() {
  const myChart = useRef(null)
  useEffect(() => {
    const chart = echarts.init(myChart.current)
    let option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        formatter: function(params) {
          console.log(params.data.children)
          if (params.data.name === "Order:1")
            return "Product：桌子*2<br>进度：6%"
          // if(params.data.children.length===0)
          //   return "无前驱任务，已经分配"+"<br>"+"当前进度：30%"
          let output = "preTask:<br>"
          for (let i = 0; i < params.data.children.length; i++) {
            output += data.children[i].name + "*" + data.children[i].num + "<br>"
          }
          if (data.percentage === 0)
            output += "进度：前驱任务尚未完成，未开始分配"
          else {
            output += "无前驱任务，已经分配" + "<br>" + "当前进度：30%" + "<br>"
            for (let i = 0; i < data.subTask.length; i++) {
              output += "工厂id：" + data.subTask[i].FactoryId + "<br>" + "任务数量：" + data.subTask[i].num + "<br>" + "工厂进度：" + data.subTask[i].process + "<br>"
            }
          }
          return output
        }
      },
      series: [
        {
          type: 'tree',

          data: [data],

          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',

          symbolSize: 20,

          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 20
          },

          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },

          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    }
    chart.setOption(option)
  }, [])

  return (
    <div
      ref={myChart}
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  )
}