import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const FilterSkeleton = () => {
  return (
    <Grid container spacing={4}>
      {
        Array(4).fill(1).map((_, id) => (
          <Grid item key={id} md={3}>
            <Typography component="div" variant="h1">
                <Skeleton/>
            </Typography>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default FilterSkeleton;
