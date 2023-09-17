import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { animateScroll as scroll } from 'react-scroll'
import { Link as ScrollLink } from "react-scroll";

import "./ScrollToTopButton.sass"


const ScrollButton = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (window.pageYOffset >= 400) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [window.pageYOffset]);

    return (
        <Button
            id="scroll-btn"
            variant="contained"
            sx={{ display: `${show ? "flex" : "none"}`, justifyContent: "center", alignItems: "center", cursor: "pointer" }}
        >
            <ScrollLink
                to="/#"
                smooth={true}
                onClick={() => scroll.scrollToTop()}
                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}
            >
                <KeyboardArrowUpIcon />
            </ScrollLink>
        </Button>
    );
};

export default ScrollButton;
