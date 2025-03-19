/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetDashboardMetricsQuery } from '@/state/api';
import React from 'react'

const CardPurchaseSummary = () => {
    const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
    // const purchaseData = data?.purchaseSummary || [];

  return (
    <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl">
       {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Purchase Summary
            </h2>
            <hr />
          </div>
          {/* BODY */}
          </>
      )}
    </div>
  )
}

export default CardPurchaseSummary
