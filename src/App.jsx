
import { Card, CardContent, Typography } from '@mui/material'
import './App.css'
import MaxwellEquation from './components/maxwell-equation'

function App() {

  return (
    <>
      <div className="mx-2 mb-5">
        <Typography variant="h2" className="font-extrabold">Maxwell Equation</Typography>
      </div>
      <Card sx={{ minWidth: 275 }} className="my-5">
        <CardContent>
          <Typography sx={{ fontSize: 16 }} className="text-justify" gutterBottom>
            Maxwell Equation are a set of coupled partial differential equations that, together with the Lorentz force law, 
            form the foundation of classical electromagnetism, classical optics, electric and magnetic circuits. The equations provide 
            a mathematical model for electric, optical, and radio technologies, such as power generation, electric motors, wireless 
            communication, lenses, radar, etc.
          </Typography>
        </CardContent>
      </Card>
      <MaxwellEquation />
    </>
  )
}

export default App
