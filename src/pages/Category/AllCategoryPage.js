import React, { useEffect } from 'react'
import CategoryContainer from '../../components/Category/CategoryContainer'
import PaginationComponent from '../../components/utils/Pagination'
import AllCategoryPage from '../../hook/category/all-category-page'

const AllCategory = () => {
  const [getPage , loading , pageCount  , category] = AllCategoryPage()

  return (
   <div>
      <CategoryContainer data={category.data} loading={loading}/>
      {
        pageCount > 1 ? (<PaginationComponent pageCount={pageCount} onPress={getPage} /> ):null
      }
   </div>
  )
}

export default AllCategory
