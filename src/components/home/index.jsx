// Home.jsx
import { Card, CardContent, Typography, Container, Accordion, AccordionSummary, AccordionDetails, List, ListItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Container>
        <div className="mx-2 mt-3 mb-5">
          <Typography variant="h2" className="font-extrabold">Welcome to Physics Card</Typography>
        </div>
        <Card sx={{ minWidth: 375 }} className="my-5">
          <CardContent>
            <Typography sx={{ fontSize: 16 }} className="text-justify" gutterBottom>
              Explore various physics concepts through interactive cards. Click on the topics to learn more.
            </Typography>
          </CardContent>
        </Card>
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card sx={{ minWidth: 375 }} className="my-3">
              <CardContent>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography sx={{ fontSize: 16 }} className="text-justify" gutterBottom>
                      Mechanics
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem className="cursor-pointer">Kinematics & Vector</ListItem>
                      <ListItem className="cursor-pointer">Dynamic Force</ListItem>
                      <ListItem className="cursor-pointer">Gravitation</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 375 }} className="my-3">
              <CardContent>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography sx={{ fontSize: 16 }} className="text-justify" gutterBottom>
                      Electrodynamic
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem className="cursor-pointer">Vector Analysis</ListItem>
                      <ListItem className="cursor-pointer" component={Link} to="/maxwell-equation">Maxwell Equation</ListItem>
                      <ListItem className="cursor-pointer">Electrostatics</ListItem>
                      <ListItem className="cursor-pointer">Magnetism</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 375 }} className="my-3">
              <CardContent>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography sx={{ fontSize: 16 }} className="text-justify" gutterBottom>
                      Quantum Mechanics
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem className="cursor-pointer">Heisenberg Equation</ListItem>
                      <ListItem className="cursor-pointer">Schrodinger Equation</ListItem>
                      <ListItem className="cursor-pointer">Wave Package</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 375 }} className="my-3">
              <CardContent>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                  >
                    <Typography sx={{ fontSize: 16 }} className="text-justify" gutterBottom>
                      Thermodynamic
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem className="cursor-pointer">Thermodynamic Law 1</ListItem>
                      <ListItem className="cursor-pointer">Thermodynamic Law 2</ListItem>
                      <ListItem className="cursor-pointer">Thermodynamic Law 3</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
