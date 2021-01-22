import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { getSingleGrammar, updateGrammar } from "../../../store/actions/admin";
import Loader from "../../../components/ui/Loader/Loader";
import { useParams, useHistory } from "react-router-dom";

const EditGrammar = () => {
  const { gId } = useParams();
  const history = useHistory();
  const { loading, data } = useSelector((state) => state.singleGrammar);
  const dispatch = useDispatch();
  const [grammar, setGrammar] = useState({
    vocabulary: "",
    explain: "",
    example: "",
    attention: "",
  });

  useEffect(() => {
    dispatch(getSingleGrammar(gId));
  }, [gId, dispatch]);

  useEffect(() => {
    if (data.grammars) {
      setGrammar(data.grammars);
    }
  }, [data.grammars]);

  const handleChange = (e) => {
    setGrammar((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateGrammar(+gId, grammar));
  };
  return (
    <div className='app-container'>
      {loading && <Loader />}
      <div className='bg-light p-4 rounded shadow my-3 w-75 mx-auto'>
        <h1 className='border-bottom pb-2 text-center'>FPT EDUCATION</h1>
        <h3 className='my-4'>Edit Grammar</h3>
        <form onSubmit={submitHandler}>
          <Grid container spacing={3}>
            <Grid item md={4}>
              Subject
            </Grid>
            <Grid item md={8}>
              <p className='lead'>
                {data?.subject} - {data?.lesson}
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={4}>
              Vocabulary
            </Grid>
            <Grid item md={8}>
              <TextField
                label='Vocabulary'
                variant='outlined'
                name='vocabulary'
                required
                fullWidth
                value={grammar.vocabulary}
                inputProps={{ maxLength: 500 }}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={4}>
              Explain
            </Grid>
            <Grid item md={8}>
              <TextField
                label='Explain'
                variant='outlined'
                name='explain'
                required
                fullWidth
                value={grammar.explain}
                inputProps={{ maxLength: 500 }}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={4}>
              Example
            </Grid>
            <Grid item md={8}>
              <TextField
                label='Example'
                variant='outlined'
                name='example'
                required
                fullWidth
                value={grammar.example}
                inputProps={{ maxLength: 500 }}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={4}>
              Attention
            </Grid>
            <Grid item md={8}>
              <TextField
                label='Attention'
                variant='outlined'
                name='attention'
                required
                fullWidth
                value={grammar.attention}
                inputProps={{ maxLength: 500 }}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          {loading && <Loader />}
          <Grid container spacing={3}>
            <Grid item md={4}></Grid>
            <Grid item md={8}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className='mr-3 bg-orange-imp'
              >
                Update
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => history.goBack()}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default EditGrammar;
