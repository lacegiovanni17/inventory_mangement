/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetDashboardMetricsQuery } from '@/state/api'
import React from 'react'


const CardPopularProducts = () => {

    const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
        {isLoading ? (
            <div className='m-5'>Loading...</div>
        ) : (
            <>
                <h3 className='text-lg font-semibold px-7 pt-5 pb-2'>
                    Popular Products
                </h3>
                <hr />
                <div className='overflow-auto h-full'>

                </div>
            </>
        )}
    </div>
  )
}

export default CardPopularProducts