import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-black'>
    <Header />
    <TaskListNumber />
    <TaskList />
    </div>
  )
}

export default EmployeeDashboard