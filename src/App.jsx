import {Box, Button, Typography, Modal} from '@mui/material';
import {useState} from "react";

function App() {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  //   const style = {
  //       position: 'absolute',
  //       top: '50%',
  //       left: '50%',
  //       transform: 'translate(-50%, -50%)',
  //       width: 400,
  //       bgcolor: 'background.paper',
  //       border: '2px solid #000',
  //       boxShadow: 24,
  //       p: 4,
  //   };
  // return (
  //   <>
  //     <Button onClick={handleOpen} variant={"contained"}>Open modal</Button>
  //     <Button onClick={handleOpen}  style={{backgroundColor:"brown", color:"white"}}>Open modal</Button>
  //     <Modal
  //         open={open}
  //         onClose={handleClose}
  //         aria-labelledby="modal-modal-title"
  //         aria-describedby="modal-modal-description"
  //     >
  //       <Box sx={style}>
  //         <Typography id="modal-modal-title" variant="h6" component="h2">
  //           Text in a modal
  //         </Typography>
  //         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  //           Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //         </Typography>
  //       </Box>
  //     </Modal>
  //   </>
  // )

    return(
        <>
            <nav>
                <h1>Website</h1>
            </nav>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </>
    )
}

export default App
