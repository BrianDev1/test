import React from "react";
import { AppBar, IconButton } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";


export function ToolbarHeader() {

    return(
        <AppBar>
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );

}

