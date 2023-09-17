import React, { useEffect } from 'react';
import { ProductItem, SectionTitle } from '../../../components';

import './BestSeller.sass';
import { products } from '../../../helpers/data';
import { productApi } from '../../../api';
import { useDispatch, useSelector } from 'react-redux';
import { setMostSoldList } from '../../../features/productSlice';

const BestSeller = () => {
  const mostSoldList = useSelector(store => store.product.mostSoldList)
  const dispatch = useDispatch()

  useEffect(() => {
    if (mostSoldList?.length === 0) {
      productApi.getProducts({
        payload: {
          sortField: "sold",
          sortOrder: "desc"
        }
      }).then(result => {
        dispatch(setMostSoldList(result.responseData?.rows))
      })
    }
  }, [mostSoldList])

  return (
    <section id="best-seller">
      <SectionTitle title="Sản phẩm được mua nhiều nhất" />
      <div className="container">
        <div className="row p-3 justify-content-center">
          {mostSoldList?.map((item, index) => {
            return (
              <div className="col-3 p-2" key={index}>
                <ProductItem {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
