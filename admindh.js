// Sidebar aside

var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar(){
    if (!sidebarOpen){
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen = true;
    }
}


function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen = false;
    }
}

//================== Charts ====================

// Bar Chart

var barChartsOptions = {
    series: [{
        data: [10,8,6,4,2]
    }],
    chart: {
        type: 'bar',
        height: 350,
        toolbar:{                  //Because toolbar option default values goes true already and it gives the ability  to download the chart as an svg csv or png file
            show:false
        },
    },
    colors:[
        "#246dec",
        "#cc3c43",
        "#367952",
        "#f5b741",
        "#4f35a1"
    ],
    plotOptions: {
        bar: {
            distributed: true,      //I want each bar to be a diff color and use the custom colors i've just defined, so i set the distributed property to true
            borderRadius: 4,        // I want the column to have rounded corners so i set border radius propert to 4.
            horizontal: false,      //I want a vertical chart not a horizontal one so i just set the horizontal property to false.
            columnWidth: '40%',     //I want each column to be 40% of the default width 
        }
    },
    dataLabels: {
        enabled: false
    },
    legend:{
        show : false
    },
    xaxis: {
        categories: ['React', 'Vue', 'Full Stack', 'Back End Development','Front End Development'],
    },
    yaxis:{
        title:{
            text:"Count"
        }
    }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartsOptions);
barChart.render();


// Area Chart 




var areaChartOptions = {
    series: [{
        name: 'Purchase Orders',
        // type: 'area',        //Chart Type
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Sales Orders',
        // type: 'line',        //Chart Type
        data: [11,32,40,45,35,55,41]
    }],
    chart: {
        height: 350,
        type: 'area',       //Area-chart
        toolbar:{
            show : false,
        },
    },
    colors:["#4f35a1","#246dec"],
    dataLabels:{
        enabled : false,
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    markers: {
        size: 0
    },
    yaxis: [
        {
            title: {
                text: 'Purchase Orders',
            },
        },
        {
            opposite: true,
            title: {
                text: 'Sales Orders',
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();


