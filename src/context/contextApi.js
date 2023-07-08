import React, { Component } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();

export const AppContext = (props) =>{
    const [loading,setLoading] = useState(false);
    const [searchResults,setSearchResults] = useState(false);
    const [selectCategories,setSelectCategories] = useState("New");
    const [mobileMenu,setMobileMenu] = useState(false);

    useEffect(()=>{
   fetchSelectedCategoryData(selectCategories);
    },[selectCategories]);

   const fetchSelectedCategoryData = (query) =>{
    setLoading(true)
    fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
        console.log(contents);
        setSearchResults(contents);
        setLoading(false);
    });
};

    return (
        <Context.Provider value={{
        
        loading,
        setLoading,
        searchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
        }
        }> 
            {props.children}
        </Context.Provider>
    )
}