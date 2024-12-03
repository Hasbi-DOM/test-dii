import { Button, Tooltip } from "@mui/material"
import { ReactNode } from "react";

interface CustomButtonProps {
    color: string // backgroundColor button = "primary" || "secondary" || "error"
    size: string // size button = "small" || "medium" || "large"
    iconColor: string // "white" || "red" || blue
    iconSize: number
    title: string
    placement: string
    disabledTooltips: boolean
    startIcon: ReactNode
    endIcon: ReactNode
    children: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
    color,
    size,
    iconColor,
    iconSize,
    title,
    placement,
    children,
    startIcon,
    endIcon,
    disabledTooltips=false,
    ...props
}) => {
  return ( 
    <Tooltip arrow title={title} placement={placement} disableHoverListener={disabledTooltips}>
        <Button 
            size={size}
            variant="contained"
            color={color}
            endIcon={endIcon}
            startIcon={startIcon}
            {...props}
        >
        {children}
        </Button>
    </Tooltip>
  );
};

export default CustomButton;
