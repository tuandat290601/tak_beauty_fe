import React from "react";
import useCategories from "../../../hooks/Categories/useCategories";

import "./Filter.sass";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const Filter = ({ productQueries, setProductQueries }) => {
  const { categoryList } = useCategories({});
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    categoryListIds: [],
    region: []
  })

  const handleCheckboxes = (criteria, value) => {
    if (selectedCheckboxes[criteria].includes(value)) {
      setSelectedCheckboxes({
        ...selectedCheckboxes,
        [`${criteria}`]: selectedCheckboxes[criteria].filter(v => v !== value)
      })
    }
    else {
      setSelectedCheckboxes({
        ...selectedCheckboxes,
        [`${criteria}`]: [...selectedCheckboxes[criteria], value]
      })
    }
  }

  useEffect(() => {
    setProductQueries({
      ...productQueries,
      ...selectedCheckboxes
    })
  }, [selectedCheckboxes])

  return (
    <div className="filter">
      <h5 className="fw-bold">Loại sản phẩm</h5>
      {categoryList && (
        <Grid container>
          {categoryList.responseData.rows.map((item) => {
            return (
              <Grid item xs={6}>
                <FormControlLabel
                  control={<Checkbox value={item.id} onChange={(e) => { handleCheckboxes("categoryListIds", e.target.value) }} />}
                  label={item.title}
                  key={item.id}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
      <hr />
      <h5 className="fw-bold">Thương hiệu</h5>
    </div>
  );
};

export default Filter;
