import React from "react";
import useCategories from "../../../hooks/Categories/useCategories";

import "./Filter.sass";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";

const Filter = () => {
  const { categoryList } = useCategories({});
  return (
    <div className="filter">
      <h5 className="fw-bold">Thương hiệu sản phẩm</h5>
      {categoryList && (
        <Grid container>
          {categoryList.responseData.rows.map((item) => {
            return (
              <Grid item xs={6}>
                <FormControlLabel
                  control={<Checkbox value={item.id} />}
                  label={item.title}
                  key={item.id}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
      <hr />
      <h5 className="fw-bold">Loại sản phẩm</h5>
    </div>
  );
};

export default Filter;
