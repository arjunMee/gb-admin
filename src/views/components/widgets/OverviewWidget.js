import React from 'react'
import { CCard, CCardBody, CRow, CCol } from '@coreui/react'
import ReactApexChart from 'react-apexcharts'
import CIcon from '@coreui/icons-react'
const colorsData = ['#6186E8', '#F97029', '#52EBD0', '#FB4E4F']
const colorsData1 = ['#6185E867', '#F96E2957', '#52EBCF59', '#FB4E4E57']

const overviewData = [
  {
    name: 'Total Story',
    value: '40 K',
    from: '12 Dec',
    to: '25 Feb',
    series: [
      {
        name: 'series1',
        data: [40, 50, 45, 55, 40, 50, 55],
      },
    ],
  },
  {
    name: 'Total Post',
    value: '40,458',
    from: '12 Dec',
    to: '25 Feb',
    series: [
      {
        name: 'series1',
        data: [40, 50, 45, 55, 40, 50, 55],
      },
    ],
  },
  {
    name: 'Total Tournaments',
    value: '38 K',
    from: '12 Dec',
    to: '25 Feb',
    series: [
      {
        name: 'series1',
        data: [40, 50, 45, 55, 40, 50, 55],
      },
    ],
  },
  {
    name: 'Articles',
    value: '78%',
    from: '12 Dec',
    to: '25 Feb',
    series: [
      {
        name: 'series1',
        data: [40, 50, 45, 55, 40, 50, 55],
      },
    ],
  },
]

const getIconsByName = (name, color = null) => {
  switch (name) {
    case 'Articles':
      return <CIcon name="cil-tags" className="text-danger" size="5xl" />
    case 'Total Tournaments':
      return <CIcon name="cil-audio-spectrum" className="text-primary" />
    case 'Total Post':
      return <CIcon name="cil-newspaper" className="text-primary" />
    case 'Total Story':
      return <CIcon name="cil-wallpaper" className="text-primary" />
    default:
      return <CIcon name="cil-wallpaper" className="text-primary" />
  }
}

const getChartOptions = (color) => {
  return {
    colors: [color],
    fill: {
      colors: [color],
    },
    grid: {
      show: false,
    },
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    xaxis: { labels: { show: false } },
    yaxis: { labels: { show: false } },
  }
}

const OverviewWidget = () => {
  return (
    <>
      <CRow className="pt-2 pb-2">
        <CCol sm="6" lg="6">
          <h6>Overview 15 Days</h6>
        </CCol>
        <CCol
          sm="6"
          lg="6"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <h6>Date : 12 Oct 20 - 6 July 21</h6>
        </CCol>
      </CRow>
      <div className="bg-white px-3 py-3 my-3">
        <CRow>
          {overviewData.map((item, index) => (
            <CCol sm="6" lg="3" key={index}>
              <CCard className="mb-3 border-0 shadow-sm" style={{ maxWidth: '18rem' }}>
                <CCardBody>
                  <div className="d-flex justify-content-between">
                    <div>
                      <CIcon name="cil-arrow-bottom" className="text-danger" />
                    </div>
                    <div>
                      {item.from} - {item.to}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: colorsData1[index % 4],
                        height: 65,
                        width: 65,
                        borderRadius: 10,
                        zIndex: 0,
                      }}
                    >
                      <CIcon
                        name="cil-diamond"
                        size="xl"
                        style={{
                          color: colorsData[index % 4],
                        }}
                      />
                    </div>
                    <div>
                      <h1
                        style={{
                          color: colorsData[index % 4],
                        }}
                      >
                        {item.value}
                      </h1>
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <ReactApexChart
                    options={getChartOptions(colorsData[index % 4])}
                    series={item.series}
                    type="area"
                    height={100}
                    width="100%"
                  />
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </div>
      <div className="bg-white px-3 py-3 my-3">
        <CRow>
          {overviewData.map((item, index) => (
            <CCol sm="6" lg="3" key={index}>
              <CCard className="mb-3 border-0 shadow-sm" style={{ maxWidth: '18rem' }}>
                <CCardBody>
                  <div className="d-flex justify-content-between">
                    <div>
                      <CIcon name="cil-arrow-bottom" className="text-danger" />
                    </div>
                    <div>
                      {item.from} - {item.to}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: colorsData1[index % 4],
                        height: 65,
                        width: 65,
                        borderRadius: 10,
                        zIndex: 0,
                      }}
                    >
                      <CIcon
                        name="cil-diamond"
                        size="xl"
                        style={{
                          color: colorsData[index % 4],
                        }}
                      />
                    </div>
                    <div>
                      <h1
                        style={{
                          color: colorsData[index % 4],
                        }}
                      >
                        {item.value}
                      </h1>
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <ReactApexChart
                    options={getChartOptions(colorsData[index % 4])}
                    series={item.series}
                    type="area"
                    height={100}
                    width="100%"
                  />
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </div>
    </>
  )
}

export default OverviewWidget
