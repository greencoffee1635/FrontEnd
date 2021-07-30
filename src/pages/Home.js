import React from "react";

// shared
import Header from "../shared/Header";
import Layout from "../shared/Layout";

// components
import Background from "../components/home/Background";
import HomeContent from "../components/home/HomeContent";

function Home(props) {
  return (
    <>
      {/* page는 home 또는 detail. home은 메인페이지, detail은 나머지페이지 */}
      <Header page="main" {...props} />
      <Background />
      <Layout>
        <HomeContent {...props} />
      </Layout>
    </>
  );
}

export default Home;
