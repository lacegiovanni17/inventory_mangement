// import { useGetDashboardMetricsQuery } from '@/state/api'
// import React from 'react'


// const CardPopularProducts = () => {

//     const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

//   return (
//     <div className="row-span-3 xl:row-span-6 bg-gray-500">
//         {isLoading ? ( 
//             <div className='m-5'>Loading...</div>
//         ) : (
//             <div>
//                 <h1>Popular Products</h1>
//                 <ul>
//                     {dashboardMetrics?.popularProducts.map((product) => (
//                         <li key={product.id}>{product.name}</li>
//                     ))}
//                 </ul>
//             </div>
//         )}
//     </div>
//   )
// }

// export default CardPopularProducts