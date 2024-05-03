import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../utils/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import Spinner from 'react-bootstrap/Spinner';
import HomeCategoryHook from "../../hook/category/home-category-hook";

const HomeCategory = () => {
   const [colors , category , loading ] = HomeCategoryHook()
  return (
    <Container>
      <SubTitle title="التصنيفات" btntitle="المزيد" PathTitle="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {
          loading === false ? (
        category.data ? (
          category.data.slice(0,5).map((item , index)=>{
          return  <CategoryCard
            title={item.name}
            background={colors[index]}
            img={item.image}
          />
        })
         
        ) : 
          <h4>لايوجد تصنيفات</h4>
        ) :   <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
            <Spinner animation="border" variant="#55cfdf" className="text-center " />
            <Spinner animation="border" variant="#55cfdf" className="text-center " />
            <Spinner animation="border" variant="#55cfdf" className="text-center " />
            <Spinner animation="border" variant="#55cfdf" className="text-center " />


        </div>  
        }
      </Row>
    </Container>
  );
};

export default HomeCategory;
