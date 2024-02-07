/*基础柱状图*/
var option_bar = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            itemStyle: {
                normal: {
                    color:'skyblue',
                }
            },
            data: [120, 200, 150, 80, 70],
            type: 'bar'
        }
    ]
};
var pre_bar = Echarts.init(document.getElementById('bar'));
pre_bar.setOption(option_bar);

/*多个柱状图*/
var option_multi_bar =  {
    title: {
        text: 'Rainfall vs Evaporation',
        subtext: 'Fake Data'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Rainfall', 'Evaporation', 'today']
    },
    toolbox: {
        show: false,
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Rainfall',
            type: 'bar',
            data: [
                2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2
            ],
        },
        {
            name: 'Evaporation',
            type: 'bar',
            data: [
                12.6, 15.9, 19.0, 126.4, 128.7, 170.7, 75.6, 82.2
            ],
        },
        {
            name: 'today',
            type: 'bar',
            data: [
                2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 15.6, 72.2
            ],
        }
    ]
};
var pre_multi_bar = Echarts.init(document.getElementById('multi_bar'));
pre_multi_bar.setOption(option_multi_bar);


/*雷达图*/
var radar_option = {
    title: {
        text: 'Basic Radar Chart'
    },
    legend: {
        data: ['Allocated Budget']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            itemStyle: {
                normal: {
                    color:'#61A8FF',
                }
            },
            data: [
                {
                    value: [4200, 3000, 20000, 35000, 50000, 18000],
                    name: 'Allocated Budget'
                },
            ]
        }
    ]
};
var radar_pre = Echarts.init(document.getElementById('radar'));
radar_pre.setOption(radar_option);


/*九宫格分布*/
var option = {
    xAxis: {
        name:'能力/潜力',
        nameTextStyle: {
            align:'center',
            'color':'#000000',
        },
        min: 3.0,
        max: 5.0,
        interval: 0.1,
        splitLine: {
            show: true,
            lineStyle:{
                color: ['#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','black',
                    '#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','black',
                    '#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','black',],
                width: 1,
                type: 'solid'
            }
        }
    },
    yAxis: {
        name:'绩效',
        nameTextStyle: {
            align:'center',
            'color':'#000000',
        },
        min: 3.0,
        max: 5.0,
        interval:0.1,
        splitLine: {
            show: true,
            lineStyle:{
                color:  ['#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','black',
                    '#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','black',
                    '#DEDEDE','#DEDEDE','#DEDEDE','#DEDEDE','black',],
                width: 1,
                type: 'solid'
            }
        }
    },

    aria: {
        show: true
    },
    series: [
        {
            symbolSize: 1,
            data: [
                [3.2, 3.3, '7 - 问题员工'],
                [4.0, 3.3, '8 - 绩效不稳定员工'],
                [4.8, 3.3, '9 - 绩效成长型员工'],
                [3.2, 4, '4 - 基本胜任'],
                [4, 4, '5 - 中坚力量'],
                [4.8, 4, '6 - 能力/潜力之星'],
                [3.2, 4.8, '1 - 熟练员工'],
                [4, 4.8, '2 - 绩效之星'],
                [4.8, 4.8, '3 - 超级明星']
            ],
            type: 'scatter',
            itemStyle: {
                normal: {
                    color:'#61A8FF',
                    label: {
                        color: 'black',
                        show: true,
                        fontWeight:600,
                        position: 'inside',

                        formatter: function (params, ticket, callback) {
                            var s = params.value[2];
                            return s;
                        }
                    }
                }
            }
        },
        {
            symbolSize: 7,
            data: [
                [3.2, 3.8, ''],
                [4.1, 3.1, ''],
                [5, 4, ''],
                [4.1, 4.2, '']
            ],
            type: 'scatter',
            itemStyle: {
                normal: {
                    color:'red',
                    label: {
                        color: 'red',
                        show: true,
                        fontWeight:600,
                        position: 'inside',

                        formatter: function (params, ticket, callback) {
                            var s = params.value[2];
                            return s;
                        }
                    }
                }
            }
        }
    ]
};
var pre = Echarts.init(document.getElementById('quadrant'));
pre.setOption(option);


/*职级分布*/
var rank_option = option = {
    title: {
        text: 'Waterfall Chart',
        subtext: 'Living Expenses in Shenzhen'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'category',
        splitLine: { show: false },
        data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
    },
    xAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                }
            },
            data: [1350,0,  1400, 1050, 1350]
        },
        {
            name: 'Life Cost',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
                color: 'steelblue'
            },
            label: {
                show: true,
                position: 'inside'
            },
            data: [300,3000, 200, 900, 300]
        }
    ]
};
var rank_pre = Echarts.init(document.getElementById('rank'));
rank_pre.setOption(rank_option);



var myChart = echarts.init(document.getElementById('main'));

var option = {
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Graph 1', 'Graph 2']
    },
    grid: {
        left: '7%',
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [40, '', 41, '', 42, '', 43, '', 44],
            axisLabel: {
                interval: 1
            },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Y-axis',
            nameLocation: 'middle',
            nameTextStyle: {
                padding: [0, 0, 8, 0],
                color: '#767676',
                fontSize: 14
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [
        {
            name: 'Graph 1',
            type: 'bar',
            barWidth: 20,
            stack: 'Graph',
            data: [8000, 0, 10000, 0, 12000, 0, 16000, 0, 20000],
            markLine: {
                silent: true,
                symbol: 'none',
                label: {
                    show: false
                },
                data: [
                    {
                        name: "Test",
                        xAxis: 2.5,
                        lineStyle: {
                            color: '#767676',
                            width: 2,
                            type: 'dashed'
                        }
                    },
                ]
            }
        },
        {
            name: 'Graph 2',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            stack: 'Graph',
            data: [4000, 0, 5000, 0, 6000, 0, 8000, 0, 10000]
        }
    ]
};

myChart.setOption(option);