import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContextProvider";

export function useItemContext() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      "useItemContext must be used within an ItemsContextProvider"
    );
  }

  return context;
}
