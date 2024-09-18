import React from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import CardProductsContainer from '../../components/Products/CardProductsContainer';
import ViewSearchProductsHook from '../../hook/product/view-search-products-hook';

const ProductByCategory = () => {
  const [items, pagination, onPress, getProduct, results] = ViewSearchProductsHook();
  
  // تحديد عدد الصفحات
  const pageCount = pagination ? pagination : 0;
  
  // إنشاء عناصر Pagination
  const renderPaginationItems = () => {
    let items = [];
    for (let number = 1; number <= pageCount; number++) {
      items.push(
        <Pagination.Item key={number} onClick={() => onPress(number)}>
          {number}
        </Pagination.Item>,
      );
    }
    return items;
  };

  return (
    <div style={{ minHeight: "670px" }}>
      <Container>
        <Row>
          <Col sm="12">
            <CardProductsContainer products={items} />
          </Col>
        </Row>
        <Pagination>{renderPaginationItems()}</Pagination>
      </Container>
    </div>
  );
};

export default ProductByCategory;
