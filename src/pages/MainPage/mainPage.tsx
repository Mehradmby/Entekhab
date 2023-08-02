import React, { useRef, useState } from "react";
import RamDataCallBack from "../../graphql/ramDataCallBack";
import TableTest from "../../components/TableTest";
import styles from "./mainPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { setSearchItems } from "../../library/redux/Slices/SearchItems";
const MainPage: React.FC = () => {
  //styles
  const { mainClass } = styles;
  //hooks
  const dispatch = useDispatch();
  const searchedItem = useSelector(
    (state: { searchItems: { item: string } }) => state.searchItems.item
  );

  //getting data from rick and morty

  const data = RamDataCallBack();

  //functions

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    //get Value of item that searched
    dispatch(setSearchItems(event.target.searchedText.value));
  };

  const removeFiltersHandler = () => {
    dispatch(setSearchItems(""));
  };
  return (
    <div className={mainClass}>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          backgroundColor: "#6b6b6d",
          borderRadius: 4,
          padding: 6,
        }}
        onSubmit={submitHandler}
      >
        <TextField
          defaultValue={searchedItem}
          label="search"
          color="primary"
          name="searchedText"
          size="small"
        />
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: "gray" }}
        >
          Find
        </Button>
        <Button
          type="button"
          variant="contained"
          style={{ backgroundColor: "gray" }}
          onClick={removeFiltersHandler}
        >
          remove filters
        </Button>
      </form>
      <TableTest results={data?.results} count={data?.info?.count} />
    </div>
  );
};

export default MainPage;
