/* global Chart:false */

$(function () {
    'use strict'
  
    var ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold'
    }
  
    var mode = 'index'
    var intersect = true
  
  
    var $visitorsChart = $('#visitors-chart')
    // eslint-disable-next-line no-unused-vars
    var visitorsChart = new Chart($visitorsChart, {
      data: {
        labels: ['Swakopmund', 'Walvisbay', 'Henties Bay', 'Arandis', 'Omaruru','Karibib','Usakos'],
        datasets: [{
          type: 'line',
          data: [100, 120, 170, 167, 180, 177, 160],
          backgroundColor: 'transparent',
          borderColor: 'red',
          pointBorderColor: 'red',
          pointBackgroundColor: 'red',
          fill: false
          // pointHoverBackgroundColor: '#007bff',
          // pointHoverBorderColor    : '#007bff'
        },
        {
          type: 'line',
          data: [43, 23, 63, 15, 32, 44, 21],
          backgroundColor: 'tansparent',
          borderColor: 'gray',
          pointBorderColor: 'gray',
          pointBackgroundColor: 'gray',
          fill: false
          // pointHoverBackgroundColor: '#ced4da',
          // pointHoverBorderColor    : '#ced4da'
        },
        {
          type: 'line',
          data: [60, 80, 70, 67, 80, 77, 100],
          backgroundColor: 'tansparent',
          borderColor: 'yellow',
          pointBorderColor: 'yellow',
          pointBackgroundColor: 'yellow',
          fill: false
          // pointHoverBackgroundColor: '#ced4da',
          // pointHoverBorderColor    : '#ced4da'
        },
        {
          type: 'line',
          data: [22, 54, 70, 43, 80, 12, 100],
          backgroundColor: 'tansparent',
          borderColor: 'green',
          pointBorderColor: 'green',
          pointBackgroundColor: 'green',
          fill: false
          //pointHoverBackgroundColor: '#ced4da',
          //pointHoverBorderColor    : '#ced4da'
        },
        {
            type: 'line',
            data: [22, 54, 70, 43, 80, 12, 100],
            backgroundColor: 'tansparent',
            borderColor: 'orange',
            pointBorderColor: 'orange',
            pointBackgroundColor: 'orange',
            fill: false
            // pointHoverBackgroundColor: '#ced4da',
            // pointHoverBorderColor    : '#ced4da'
          },
          
        {
          type: 'line',
          data: [60, 53, 70, 35, 27, 66, 27],
          backgroundColor: 'tansparent',
          borderColor: 'purple',
          pointBorderColor: 'purple',
          pointBackgroundColor: 'purple',
          fill: false
          // pointHoverBackgroundColor: '#ced4da',
          // pointHoverBorderColor    : '#ced4da'
        },
		{
            type: 'line',
            data: [80, 70, 100, 73, 90, 60, 100],
            backgroundColor: 'tansparent',
            borderColor: 'blue',
            pointBorderColor: 'blue',
            pointBackgroundColor: 'blue',
            fill: false
            // pointHoverBackgroundColor: '#ced4da',
            // pointHoverBorderColor    : '#ced4da'
          },
    ]
        
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          mode: mode,
          intersect: intersect
        },
        hover: {
          mode: mode,
          intersect: intersect
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            // display: false,
            gridLines: {
              display: true,
              lineWidth: '4px',
              color: 'rgba(0, 0, 0, .2)',
              zeroLineColor: 'transparent'
            },
            ticks: $.extend({
              beginAtZero: true,
              suggestedMax: 200
            }, ticksStyle)
          }],
          xAxes: [{
            display: true,
            gridLines: {
              display: false
            },
            ticks: ticksStyle
          }]
        }
      }
    })
  })
  
  // lgtm [js/unused-local-variable]
  