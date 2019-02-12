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

    /*-- colors --*/
    $red: "#d0021b",
    $white: "#ffffff",
    $black: "#000000",
    $green: "#00A76A",
    $greenHeritage: "#008755",
    $greenDark: "#006150",

    /*-- spacing --*/
    $space: (type, direction, val) => {
        if (type === "padding") {
            const padding = `padding-${direction}: ${val}rem;`;
            if (direction === "top") {
                return padding;
            } else if (direction === "bottom") {
                return padding;
            } else if (direction === "left") {
                return padding;
            } else if (direction === "right") {
                return padding;
            }else{
              return `padding: ${val}rem;`;
            }
        } else {
            const margin = `margin-${direction}: ${val}rem;`;
            if (direction === "top") {
                return margin;
            } else if (direction === "bottom") {
                return margin;
            } else if (direction === "left") {
                return margin;
            } else if (direction === "right") {
                return margin;
            }
        }
    },

    /*-- font weights --*/
    $light: "300",
    $regular: "400",
    $bold: "900",

    /*-- borders --*/
    $border: (type, px, color) => `${type}: ${px}px solid ${color};`,

    /*-- transitions --*/
    $ease: delay => `${delay}s ease`,

    /*-- radius --*/
    $borderRadius: radius => `border-radius: ${radius}px;`,

    // --------------------------------------------------
    // Flexbox SASS mixins
    // The spec: http://www.w3.org/TR/css3-flexbox
    // --------------------------------------------------

    // Flexbox display
    $flexbox: () => "display: flex;",

    // The 'flex' shorthand
    // - applies to: flex items
    // <positive-number>, initial, auto, or none
    $flex: values => `flex: ${values};`,

    // Flex Flow Direction
    // - applies to: flex containers
    // row | row-reverse | column | column-reverse
    $flexDirection: direction => `flex-direction: ${direction};`,

    // Flex Line Wrapping
    // - applies to: flex containers
    // nowrap | wrap | wrap-reverse
    $flexWrap: wrap => `flex-wrap: ${wrap};`,

    // Flex Direction and Wrap
    // - applies to: flex containers
    // <flex-direction> || <flex-wrap>
    $flexFlow: flow => `flex-flow: ${flow};`,

    // Display Order
    // - applies to: flex items
    // <integer>
    $order: val => `order: -webkit-box-ordinal-group: ${val};`,

    // Flex grow factor
    // - applies to: flex items
    // <number>
    $flexGrow: grow => `flex-grow: flex-grow: ${grow};`,

    // Flex shrink
    // - applies to: flex item shrink factor
    // <number>
    $flexShrink: shrink => `flex-shrink: flex-shrink: ${shrink};`,

    // Flex basis
    // - the initial main size of the flex item
    // - applies to: flex itemsnitial main size of the flex item
    // <width>
    $flexBasis: width => `flex-basis:flex-basis: ${width};`,

    // Axis Alignment
    // - applies to: flex containers
    // flex-start | flex-end | center | space-between | space-around
    $justifyContent: justify => `justify-content: ${justify};`,

    // Packing Flex Lines
    // - applies to: multi-line flex containers
    // flex-start | flex-end | center | space-between | space-around | stretch
    $alignContent: align => `align-content: $align;`,

    // Cross-axis Alignment
    // - applies to: flex containers
    // flex-start | flex-end | center | baseline | stretch
    $alignItems: align => `align-items: ${align};`,

    // Cross-axis Alignment
    // - applies to: flex items
    // auto | flex-start | flex-end | center | baseline | stretch
    $alignSelf: align => `align-self:align-self: ${align};`,

    $visuallyhidden: () =>
        `border: 0; clip: rect(0 0 0 0); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px;`
};

export default theme;
