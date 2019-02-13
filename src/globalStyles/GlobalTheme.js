/*-- Global Theme --*/

// the global theme file define all the "theme" CSS variables & mixins
// those are theme specific properties , used by components in the application
// src : https://www.styled-components.com/docs/advanced#theming

const theme = {
    /*
  ===============================================================================
    helpers - scss variables
  ===============================================================================
  */

    /*-- breakpoints --*/
    $mobileBreakpoint: "320px",
    $tabletBreakpoint: "768px",
    $desktopSmallBreakpoint: "940px",
    $desktopBreakpoint: "1170px",

    /*-- breakpoints --*/
    $primary: "#0696a6",
    $primaryDark: "#047a87",
    $white: "#ffffff",
    $offWhite: "#f0f0f0",

    /*-- font weights --*/
    $light: "300",
    $regular: "400",
    $semiBold: "700",
    $bold: "900"
};

export default theme;
