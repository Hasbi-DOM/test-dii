import CustomButton from "./components/CustomButton"
import { FaPlus } from "react-icons/fa6";

function App() {
  return (
    <>
      <CustomButton
        startIcon={<FaPlus size={10} color="white"/>}
        size="small"
        color="primary"
        iconColor="white"
        placement="top-end"
        title="Add"
        iconSize={15}
      >
        add item
      </CustomButton>
      <CustomButton
        endIcon={<FaPlus size={10} color="white"/>}
        size="large"
        color="error"
        iconColor="white"
        placement="top-start"
        title="Add"
        iconSize={30}
      >
        add item
      </CustomButton>
      <CustomButton
        size="medium"
        color="secondary"
        iconColor="white"
        placement="top-start"
        title="Add"
        iconSize={30}
        disabledTooltips
      >
        add item
      </CustomButton>
    </>
  )
}

export default App
