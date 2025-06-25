import React from "react";
import Header from "./Header/Header";
import NavigationBar from "./NavigationBar/NavigationBar";

const AppLayout: React.FC = () => {
    return (<div>
        <Header/>
        <NavigationBar/>
      </div>);
}

export default AppLayout;