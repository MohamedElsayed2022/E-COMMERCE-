import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../../components/Category/CategoryCard";
import Spinner from "react-bootstrap/Spinner";
const CategoryContainer = ({data , loading}) => {
  const colors = [
    "#FFD3E8",
    "#f4dba5",
    "#55cfdf",
    "ff6262",
    "#0034ff",
    "#ffd3e8",
  ];
 

  return (
    <Container style={{ minHeight: "670px" }}>
      <div className="admin-content-text mt-3">كل التصنيفات </div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.slice(0, 5).map((item, index) => {
              return (
                <CategoryCard
                title={item.name}
                background={colors[Math.floor(Math.random()*5) +1]}
                img={item.image}
                key={index}
                />
              );
            })
          ) : (
            <h4>لايوجد تصنيفات</h4>
          )
        ) : (
          <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
            <Spinner
              animation="border"
              variant="#55cfdf"
              className="text-center "
            />
            <Spinner
              animation="border"
              variant="#55cfdf"
              className="text-center "
            />
            <Spinner
              animation="border"
              variant="#55cfdf"
              className="text-center "
            />
            <Spinner
              animation="border"
              variant="#55cfdf"
              className="text-center "
            />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
