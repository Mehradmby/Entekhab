import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { useSelector } from "react-redux";

const RamDataCallBack = () => {
  const page = useSelector(
    (state: { pagination: { page: number } }) => state.pagination.page
  );
  const searchedItem = useSelector(
    (state: { searchItems: { item: string } }) => state.searchItems.item
  );

  let name_Querry: any;
  name_Querry = gql`
    query GetCharacters($page: Int, $searchedItem: String) {
      characters(page: $page, filter: { name: $searchedItem }) {
        info {
          count
        }
        results {
          name
          id
          species
          status
          gender
          location {
            name
          }
        }
      }
    }
  `;
  const { data, refetch } = useQuery(name_Querry, {
    variables: { page, searchedItem },
  });
  useEffect(() => {
    refetch();
  }, [searchedItem]);

  return data?.characters;
};
export default RamDataCallBack;
