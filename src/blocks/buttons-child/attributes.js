/**
 * BLOCK: Buttons Child - Attributes
 */

const attributes = {
	block_id: {
		type: "string"
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	align: {
		type: "string",
		default: "center"
	},
	gap: {
		type: "number",
		default: 10
	},
	stack: {
		type: "string",
		default: "none"
	},
	loadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	fontFamily: {
		type: "string",
		default: "Default",
	},
	fontWeight: {
		type: "string",
	},
	fontSubset: {
		type: "string",
	},
	label: {
		type: "string",
		default:'#Button' 
	} ,
	link: {
		type: "string",
		default:"#" 
	} ,
	target: {
		type: "string",
		default:"_self" 
	},
	size: {
		type: "string",
		default:"" 
	},
	vPadding: {
		type: "string",
		default:10 
	},
	hPadding: {
		type: "string",
		default:14 
	} ,
	borderWidth: {
		type: "string",
		default:1 
	} ,
	borderRadius: {
		type: "string",
		default:2 
	} ,
	borderStyle: {
		type: "string",
		default:"solid" 
	} ,
	borderColor: {
		type: "string",
		default:"#333" 
	} ,
	borderHColor: {
		type: "string",
		default:"#333" 
	} ,
	color: {
		type: "string",
		default:"#333" 
	} ,
	background: {
		type: "string",
		default:"" 
	} ,
	hColor: {
		type: "string",
		default:"#333" 
	} ,
	hBackground: {
		type: "string",
		default:"" 
	} ,
	sizeType: {
		type: "string",
		default:"px" 
	} ,
	sizeMobile: {
		type: "string",
		default:"" 
	} ,
	sizeTablet: {
		type: "string",
		default:"" 
	} ,
	lineHeight: {
		type: "string",
		default:"" 
	} ,
	lineHeightType: {
		type: "string",
		default:"em" 
	},
	lineHeightMobile: {
		type: "string",
		default:"" 
	} ,
	lineHeightTablet: {
		type: "string",
		default:"" 
	} ,
}

export default attributes