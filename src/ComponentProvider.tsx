import { createContext, ReactNode, useContext, useState } from "react";

type activeComponentType = "homePage" | "about" | "contact";
type componentContextTypes = {
  activeComponent: "homePage" | "about" | "contact";
  setActiveComponent: React.Dispatch<
    React.SetStateAction<"homePage" | "about" | "contact">
  >;
};

export const ComponentContext = createContext<componentContextTypes>(
  {} as componentContextTypes
);

export const ComponentProvider = ({ children }: { children: ReactNode }) => {
  const [activeComponent, setActiveComponent] =
    useState<activeComponentType>("homePage");

  return (
    <ComponentContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </ComponentContext.Provider>
  );
};

export const UseComponentProvider = () => useContext(ComponentContext);
