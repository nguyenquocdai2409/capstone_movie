import React from 'react'
import Header from '../component/Header/Header'

export default function Layout({children}) {
  return (
    <div className=''>
        <Header/>
        {children}
    </div>
  )
}
// layout là thằng trung gian bọc những component lại , để mỗi lần update thì ta update layout thì những componet con sẽ tự có

//props children