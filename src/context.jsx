import React from "react";
import { createContext, useContext } from "react";

export const filmsListContext = createContext(undefined);

export function useContextFilmsList() {
    const APIs = useContext(filmsListContext)
    if (!APIs) {
        throw new Error("No filmsList found in the context")
    }
    return APIs;
}