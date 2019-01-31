/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function contentTimelineStyle( props ) {
	const {
		dateBottomspace,
		backgroundColor,
		separatorColor,
		separatorFillColor,
		separatorBg,
		separatorBorder,
		borderFocus,
		verticalSpace,
		horizontalSpace,
		separatorwidth,
		borderwidth,
		connectorBgsize,
		borderRadius,
		bgPadding,
		width,
		readMoreText,
		icon,
		iconColor,
		dateFontsize,
		dateFontsizeType,
		dateFontsizeMobile,
		dateFontsizeTablet,
		dateColor,
		iconSize,
		iconFocus,
		iconBgFocus,
		block_id,
		headFontSize,
		headFontSizeType,
		headFontSizeMobile,
		headFontSizeTablet,
		align,
		headingColor,
		headSpace,
		subHeadFontSize,
		subHeadFontSizeType,
		subHeadFontSizeMobile,
		subHeadFontSizeTablet,
		subHeadingColor,
	} = props.attributes

	if( props.clientId ){
		var clientId = props.clientId
	}else{
		var clientId = block_id
	}

	var m_selectors = {}
	var t_selectors = {}

	var selectors = {
	".uagb-timeline__heading" : {
		"font-size" : headFontSize+headFontSizeType,
		"text-align": align,
		"color": headingColor,
	},
	".uagb-timeline__heading a" : {
		"font-size" : headFontSize+headFontSizeType,
		"text-align": align,
		"color": headingColor,
	},
	".uagb-timeline__heading-text" : {
		"margin-bottom" : headSpace+"px",
	},
	".uagb-timeline-desc-content" : {
		"font-size" : subHeadFontSize+subHeadFontSizeType,
		"text-align": align,
		"color": subHeadingColor,
	},
	".uagb-timeline__events-new" : {
		"text-align": align,
	},
	".uagb-timeline__date-inner" : {
		"text-align": align,
	},
	".uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
		"border-left-color" : backgroundColor,
	},
	".uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
		"border-left-color" : backgroundColor
	},
	".uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after" : {
		"border-right-color" : backgroundColor
	},
	".uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after" : {
		"border-right-color" : backgroundColor
	},
	".uagb-timeline__line__inner" : {
		"background-color" : separatorFillColor
	},
	".uagb-timeline__line" : {
		"background-color" : separatorColor,
		"width" : separatorwidth+"px",
	},
	".uagb-timeline__right-block .uagb-timeline__line" : {
		"right" : "calc( "+connectorBgsize+"px / 2 )",
	},
	".uagb-timeline__left-block .uagb-timeline__line" : {
		"left" : "calc( "+connectorBgsize+"px / 2 )",
	},
	".uagb-timeline__center-block .uagb-timeline__line" : {
		"right" : "calc( "+connectorBgsize+"px / 2 )",
	},
	".uagb-timeline__marker" : {
		"background-color" : separatorBg,
		"min-height": connectorBgsize+"px",
		"min-width" : connectorBgsize+"px",
		"line-height" : connectorBgsize+"px",
		"border": borderwidth+"px solid"+separatorBorder,
	},
	".uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow" : {
		"height" : connectorBgsize+"px",
	},
	".uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow" : {
		"height" : connectorBgsize+"px",
	},
	".uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow" : {
		"height" : connectorBgsize+"px",
	},
	".uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow" : {
		"height" : connectorBgsize+"px",
	},
	".uagb-timeline__center-block .uagb-timeline__marker" : {
		"margin-left" : horizontalSpace+"px",
		"margin-right": horizontalSpace+"px",
	},
	".uagb-timeline__field:not(:last-child)" : {
		"margin-bottom" : verticalSpace+"px",
	},
	".uagb-timeline__date-hide.uagb-timeline__date-inner" : {
		"margin-bottom" : dateBottomspace+"px",
		"color": dateColor,
		"font-size" : dateFontsize+dateFontsizeType,
		"text-align": align,
	},
	".uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left" : {
		"margin-left" : horizontalSpace+"px",
	},
	".uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right" : {
		"margin-right" : horizontalSpace+"px",
	},
	".uagb-timeline__date-new" : {
		"color": dateColor,
		"font-size" : dateFontsize+dateFontsizeType,
	},
	".uagb-timeline__events-inner-new" : {
		"background-color" : backgroundColor,
		"border-radius" : borderRadius+"px",
		"padding": bgPadding+"px",
	},
	".uagb-timeline__main .uagb-timeline__icon-new" : {
		"color": iconColor,
		"font-size" : iconSize+"px",
		"width": iconSize+"px",
	},
	".uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon" : {
		"background" : iconBgFocus,
		"border-color": borderFocus,
	},
	".uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new" : {
		"color": iconFocus,
	},
	".uagb-timeline__main .uagb-timeline__icon-new svg" : {
		"fill": iconColor,
	},
	".uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new svg" : {
		"fill": iconFocus,
	}
}

	var t_selectors : {
		".uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			"font-size" : dateFontsizeTablet + dateFontsizeType,
		},
		".uagb-timeline__date-new" : {
			"font-size" : dateFontsizeTablet + dateFontsizeType,
		},
		".uagb-timeline__heading" : {
			"font-size" : headFontSizeTablet + headFontSizeType
		},
		".uagb-timeline__heading a" : {
			"font-size" : headFontSizeTablet + headFontSizeType
		},
		".uagb-timeline-desc-content" : {
			"font-size" : subHeadFontSizeTablet + subHeadFontSizeType
		}
	}

	var m_selectors : {
		".uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			"font-size" : dateFontsizeMobile + dateFontsizeType,
		},
		".uagb-timeline__date-new" : {
			"font-size" : dateFontsizeMobile + dateFontsizeType,
		},
		".uagb-timeline__heading" : {
			"font-size" : headFontSizeMobile + headFontSizeType
		},
		".uagb-timeline__heading a" : {
			"font-size" : headFontSizeMobile + headFontSizeType
		},
		".uagb-timeline-desc-content" : {
			"font-size" : subHeadFontSizeMobile + subHeadFontSizeType
		},

		/* Generate Responsive CSS for timeline */
		".uagb-timeline__center-block .uagb-timeline__marker" : {
			"margin-left" : "0px",
			"margin-right" : "0px",
		},

		".uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left" = {
			"margin-left" : horizontalSpace+"px",
		},
		".uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right" = {
			"margin-left" : horizontalSpace+"px",
		},
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += ".block-editor-page #wpwrap #uagb-ctm-"+clientId+" "+i + " { "

		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	// Responsive css.
	styling_css += "@media(max-width: 976px){"
	for( var i in t_selectors ) {


		styling_css += ".block-editor-page #wpwrap #uagb-ctm-"+clientId+" "+i + " { "

		var sel = t_selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}
	styling_css += "}"

	styling_css += "@media(max-width:768px){"
	for( var i in m_selectors ) {


		styling_css += ".block-editor-page #wpwrap #uagb-ctm-"+clientId+" "+i + " { "

		var sel = m_selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}
	styling_css += "}"

	return styling_css

}

export default contentTimelineStyle
