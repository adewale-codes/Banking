"use client"
import React from 'react'
import { App } from './components/App'
import { PieChart } from './components/PieChart'
import { LineChart } from './components/LineChart'

const Overview = () => {

  const Widgets=[
    { title: "Total Balance", balance: "$21,189.00" },
    { title: "Income", balance: "$12,200.00" },
    { title: "Expenses", balance: "$8,056.80" },
  ]

  return (
    <div>
      <div className='flex gap-2 md:flex-row flex-col justify-around items-center md:items-start p-5'>
          {Widgets.map((Menu, index) =>(
            <div key={index} className={`p-5 h-1/2 md:w-1/2 bg-white rounded drop-shadow`}>
              <div className={`flex justify-between items-center`}>
                <div className={``}>{Menu.title}</div>
                <div className={`text-grays-200 text-xs`}>This month</div>
              </div>
              <div className={`font-bold text-xl`}>{Menu.balance}</div>
              <div>
                <App />
              </div>
            </div>
          ))}
      </div>
      <div className='flex gap-2 md:flex-row flex-col justify-around items-center md:items-start p-5'>
        <div className='w-full'>
          <div className='bg-white h-1/2 w-full p-5 drop-shadow rounded'>
            <div className='flex justify-between items-center'>
              <div>All Expense</div>
              <div className='text-grays-200 text-xs'>This month</div>
            </div>
            <div>
              <PieChart />
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='bg-white h-1/2 w-full p-5 drop-shadow rounded'>
            <div className='flex justify-between items-center'>
                <div>Total Balance</div>
                <div className='text-grays-200 text-xs'>This week</div>
            </div>
            <div>
              <LineChart />
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-2 md:flex-row flex-col justify-around items-center md:items-start p-5'>
        <div className='w-full'>
          <div className='bg-white h-40 w-80 p-5 drop-shadow rounded'></div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Overview