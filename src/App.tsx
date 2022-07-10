import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./_shared/styledComponents/GlobalStyles";
import Home from "./home/screen/Home";
import Auth from "./auth/screen/Auth";
import Header from "./header/screen/Header";
import Footer from "./footer/screen/Footer";
import { AssetProvider } from "./_shared/hooks/assets";
import assets from "./_shared/assets";
import { ThemeProvider } from "styled-components";
import { themes } from "./_shared/styledComponents/themes";
import { Absolute, Box, Column } from "./_shared/styledComponents";
import Svg from "./_shared/styledComponents/Svg";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes.data.light}>
        <AssetProvider assets={assets as any}>
          <GlobalStyles />
          <Header />
          {/* <Column
            background="red"
            width="50px"
            justifyContent="center"
            alignItems="center"
            style={{ transform: "translate(50%,-50%)" }}
            mr={4}
            zIndex={99999}
            top="50%"
            bottom="50%"
            right="0%"
            position="fixed"
          >
            <Svg color="white" name="ChevronUp" />
            <Svg color="white" name="ChevronDown" />

            <Svg color="white" name="Work" />
            <Svg color="white" name="Dashboard" />
          </Column> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <Footer />
        </AssetProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
