import React from "react";
import ReactDOM from "react-dom";
import Previewer from "./Previewer";

it("renders without crashing", () => {
    ReactDOM.render(<Previewer />, document.createElement('div'));
});
