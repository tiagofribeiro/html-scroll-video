import react from "react";

import { PrimaryButton } from "./style";

export default class Button extends React.Component {
    render() {
        <PrimaryButton>{this.props.children}</PrimaryButton>
    }
};