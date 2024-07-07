import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar className="justify-between bg-zinc-800" style={{ width: '100%' }}>
        <Typography variant="h6" className="">
          Physics Card
        </Typography>
        <div>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Topics</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
