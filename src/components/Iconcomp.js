import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Box } from "@quarkly/widgets";
import { MdAccountBalance } from "react-icons/md";
const defaultProps = {};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdAccountBalance
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdAccountBalance
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdAccountBalance
		}
	}
};

const Iconcomp = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Icon {...override("icon")} />
		<Icon {...override("icon1")} />
		<Icon {...override("icon2")} />
		{children}
	</Box>;
};

Object.assign(Iconcomp, { ...Box,
	defaultProps,
	overrides
});
export default Iconcomp;