import React from 'react'
import Header from '../../component/Header/Header'
import ListMovie from './ListMovie/ListMovie'
import TabMovie from './TabMovie/TabMovie'
import Footer from '../../component/Footer/Footer'
import Slider from './Slider/Slider'

export default function Home() {
  return (
    <div className='space-y-14'>
      <Slider/>
      <ListMovie/>
      <TabMovie/>
      <Footer/>
    </div>
  )
}
// lấy dữ liệu về =>>> mapstatetoprops