import React from 'react'
import { CCard, CCardBody, CRow, CCol, CCardHeader } from '@coreui/react'
import { useFetch } from 'src/hooks/useFetch'
import { AppUrl } from 'src/config/ApiName'
import ReactApexChart from 'react-apexcharts'
const colorsData = ['#6186E8', '#F97029', '#52EBD0', '#FB4E4F']
const colorsData1 = ['#6185E867', '#F96E2957', '#52EBCF59', '#FB4E4E57']

const getCircularChartOptions = () => {
  return {
    chart: {
      height: 150,
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#FB4E4F'],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '55%',
        },
        dataLabels: {
          showOn: 'always',
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '13px',
          },
          value: {
            color: '#111',
            fontSize: '30px',
            show: true,
          },
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Images'],
  }
}

const getBarChartOptions = () => {
  return {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
      },
    },
    xaxis: {
      type: 'days',
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    legend: {
      position: 'bottom',
      offsetY: 7,
    },
    fill: {
      opacity: 1,
    },
  }
}

const UserEngagementWidget = () => {
  const [state, setState] = React.useState([])
  const [data, isDataLoading] = useFetch(
    `http://${AppUrl}/api/gb-admin/total-engagement/`,
    setState,
  )
  const LikeData = state.map((data) => data.likes)
  const CommentData = state.map((data) => data.comments)
  const PostData = state.map((data) => data.posts)

  const series = [
    {
      name: 'Like',
      data: LikeData,
    },
    {
      name: 'Comment',
      data: CommentData,
    },
    {
      name: 'Post',
      data: PostData,
    },
  ]
  return (
    <>
      <CRow className="pt-2 pb-2">
        {console.log(LikeData, CommentData, PostData)}
        <CCol sm="12" lg="12">
          <h6>User Engagement</h6>
        </CCol>
      </CRow>
      <CRow className="pt-2 pb-2">
        <CCol sm="6" lg="4">
          <CCard className="mb-3 border-0 shadow-sm">
            <CCardHeader>Post Type</CCardHeader>
            <CCardBody>
              <ReactApexChart
                options={getCircularChartOptions()}
                series={[40]}
                type="radialBar"
                height={200}
                width="100%"
              />
              <CRow className="my-2">
                <CCol lg={4}>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: colorsData1[1],
                      height: 70,
                      width: '100%',
                      borderRadius: 10,
                      zIndex: 0,
                    }}
                  ></div>
                </CCol>
                <CCol lg={8}>
                  <h6>Images</h6>
                  <p>25 Aug - 25 Sep</p>
                </CCol>
              </CRow>
              <CRow className="my-2">
                <CCol lg={4}>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: colorsData1[2],
                      height: 70,
                      width: '100%',
                      borderRadius: 10,
                      zIndex: 0,
                    }}
                  ></div>
                </CCol>
                <CCol lg={8}>
                  <h6>Videos</h6>
                  <p>25 Aug - 25 Sep</p>
                </CCol>
              </CRow>
              <CRow className="my-2">
                <CCol lg={4}>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: colorsData1[3],
                      height: 70,
                      width: '100%',
                      borderRadius: 10,
                      zIndex: 0,
                    }}
                  ></div>
                </CCol>
                <CCol lg={8}>
                  <h6>Articles</h6>
                  <p>25 Aug - 25 Sep</p>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm="6" lg="8">
          <CCard className="mb-3 border-0 shadow-sm">
            <CCardBody>
              <CRow className="pt-2 pb-2">
                <CCol sm="6" lg="6">
                  <h6>Total Engagement</h6>
                </CCol>
                <CCol
                  sm="6"
                  lg="6"
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <h6>Monthly</h6>
                </CCol>
              </CRow>
              {state.length !== 0 && (
                <ReactApexChart
                  options={getBarChartOptions()}
                  series={series}
                  type="bar"
                  height={425}
                  width="100%"
                />
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UserEngagementWidget
