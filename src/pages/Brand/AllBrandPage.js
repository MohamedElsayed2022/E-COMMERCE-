import React from 'react'
import BrandContainer from '../../components/Brand/BrandContainer'
import Pagination from '../../components/utils/Pagination'
import AllBrandHook from '../../hook/brand/all-brand-page-hook';

const AllBrand = () => {
  const [brand, loading, pageCount, getPage] = AllBrandHook();

  return (
    <div style={{minHeight:"670px"}}>
      <BrandContainer data={brand.data} loading={loading}/>
      <Pagination pageCount={pageCount} onPress={getPage} />
          </div>
  )
}

export default AllBrand
