import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { createGrammar } from "../../../store/actions/admin";
import Loader from "../../../components/ui/Loader/Loader";
import { useParams, useHistory } from "react-router-dom";

const CreateGrammar = () => {
  const { lId } = useParams();
  const history = useHistory();
  const { loading } = useSelector((state) => state.grammar);
  const dispatch = useDispatch();

  const [grammar, setGrammar] = useState({
    vocabulary: "",
    explain: "",
    example: "",
    attention: "",
  });

  const handleChange = (e) => {
    setGrammar((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createGrammar(lId, grammar));
  };
  return (
    <div className='app-container'>
      <div className='bg-light p-4 rounded shadow my-3 w-75 mx-auto'>
        <h1 className='border-bottom pb-2 text-center'>FPT EDUCATION</h1>
        <h3 className='my-4'>Create Grammar</h3>
        <form onSubmit={submitHandler}>
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
                Create
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

export default CreateGrammar;
