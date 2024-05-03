import {useSelector , useDispatch} from 'react-redux'
import { getAllBrandPage } from '../../Redux/Actions/brandAction';
const AllBrandHook = () => {
  
    const dispatch = useDispatch();
    const brand = useSelector((state) => state.allbrand.brand);
    const loading = useSelector((state) => state.allbrand.loading);
    let pageCount = 0

      if(brand.paginationResult){
        pageCount = brand.paginationResult.numberOfPages
        console.log(pageCount)
      }

    // useEffect(() => {
    //   dispatch(getAllBrandPage(5));
    // }, []);
  
    const getPage = (page)=>{
      dispatch(getAllBrandPage(page));
      console.log(page)
  
    }
    return [getPage , loading , pageCount  , brand ]
}

export default AllBrandHook
