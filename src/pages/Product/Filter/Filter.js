import React from "react";
import useCategories from "../../../hooks/Categories/useCategories";

import "./Filter.sass";
import { Checkbox, FormControlLabel, FormGroup, Grid, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const regions = [
  "Tất cả",
  "Châu Á",
  "Châu Âu",
]

const Filter = ({ productQueries, setProductQueries }) => {
  const { categoryList } = useCategories({});
  const [selectedButtons, setSelectedButton] = useState({
    categoryListIds: [],
    region: ""
  })

  const handleCheckboxes = (criteria, value) => {
    if (selectedButtons[criteria].includes(value)) {
      setSelectedButton({
        ...selectedButtons,
        [`${criteria}`]: selectedButtons[criteria].filter(v => v !== value)
      })
    }
    else {
      setSelectedButton({
        ...selectedButtons,
        [`${criteria}`]: [...selectedButtons[criteria], value]
      })
    }
  }

  const handleRadioButtons = (criteria, value) => {
    if (value == "Tất cả") {
      setSelectedButton({
        ...selectedButtons,
        [`${criteria}`]: "",
      })
    }
    else {
      setSelectedButton({
        ...selectedButtons,
        [`${criteria}`]: value
      })
    }
  }

  useEffect(() => {
    setProductQueries({
      ...productQueries,
      ...selectedButtons.categoryListIds,
      filters: selectedButtons.region ? `region==${selectedButtons.region}` : ""
    })
  }, [selectedButtons])

  return (
    <div className="filter">
      <h5 className="fw-bold">Loại sản phẩm</h5>
      {categoryList && (
        <Grid container
          className="filter-field"
        >
          {categoryList.responseData.rows.map((item) => {
            return (
              <Grid item xs={6} key={item.id}>
                <FormControlLabel
                  control={<Checkbox value={item.id} onChange={(e) => { handleCheckboxes("categoryListIds", e.target.value) }} />}
                  label={item.title}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
      <hr />
      <h5 className="fw-bold mt-3">Thương hiệu</h5>
      <RadioGroup
        defaultValue="Tất cả"
        name="region"
        className="filter-field"
      >
        {regions.map((item, index) => {
          return <FormControlLabel key={index} value={item} control={<Radio onChange={(e) => { handleRadioButtons("region", e.target.value) }} />} label={item} />
        })}
      </RadioGroup>
    </div>
  );
};

export default Filter;
