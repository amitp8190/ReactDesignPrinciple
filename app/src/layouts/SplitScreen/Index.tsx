import React from "react";
import { SplitScreen } from "./splitscreen";


export default function MainView() {

    const LeftSideComp = ({ title }) => {
        return <div style={{ flex: 1 }}><h2 style={{ backgroundColor: "crimson", height: '500' }}>{title}</h2></div>;
    };

    const RightSideComp = ({ title }) => {
        return <div style={{ flex: 1 }}><h2 style={{ backgroundColor: "burlywood", height: '500' }}>{title}</h2><div />;
        </div>
    };
    return <SplitScreen leftWidth={1} rightWidth={1}>
        <LeftSideComp title={'Right'} />
        <RightSideComp title={'Left'} />
    </SplitScreen>

}
