import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, CardContent } from '@mui/material';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import PropTypes from 'prop-types';
import gaussLawImage from '../../assets/flux-surface.png';
import gaussMagnetismImage from '../../assets/gauss-magnetism-law-dipole.gif';
import faradayLawImage from '../../assets/faraday-law.gif';
import ampereLawImage from '../../assets/ampere-law.gif';

const equations = [
  {
    title: "Gauss's Law",
    description: [
      "In its integral form, it states that the flux of the electric field out of an arbitrary closed surface is proportional to the electric charge enclosed by the surface, irrespective of how that charge is distributed.",
    ],
    formulas: [
      '\\oint_{S} \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}',
      '\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}'
    ],
    images: [gaussLawImage],
  },
  {
    title: "Gauss's Law for Magnetism",
    description: [
      "It states that the magnetic field has divergence equal to zero, in other words, that it is a solenoidal vector field. It is equivalent to the statement that magnetic monopoles do not exist. Rather than magnetic charges, the basic entity for magnetism is the magnetic dipole. (If monopoles were ever found, the law would have to be modified, as elaborated below.)",
    ],
    formulas: [
      '\\oint_{S} \\mathbf{B} \\cdot d\\mathbf{A} = 0',
      '\\nabla \\cdot \\mathbf{B} = 0'
    ],
    images: [gaussMagnetismImage],
  },
  {
    title: "Faraday's law",
    description: [
      "In integral form, it states that the work per unit charge required to move a charge around a closed loop equals the rate of change of the magnetic flux through the enclosed surface. The Maxwell–Faraday equation states that a time-varying magnetic field always accompanies a spatially varying (also possibly time-varying), non-conservative electric field, and vice versa. The Maxwell–Faraday equation is",
    ],
    formulas: [
      '\\oint_{C} \\mathbf{E} \\cdot d\\mathbf{l} = -\\frac{d}{dt} \\int_{S} \\mathbf{B} \\cdot d\\mathbf{A}',
      '\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}',
    ],
    images: [faradayLawImage],
  },
  {
    title: "Ampere's Law",
    description: [
      "Ampere's law relates the circulating magnetic field in a closed loop to the electric current passing through the loop. Maxwell extended this law to include the displacement current, which allows it to apply to both static and dynamic fields.",
    ],
    formulas: [
      '\\oint_{C} \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 \\left( I_{\\text{enc}} + \\varepsilon_0 \\frac{d\\Phi_E}{dt} \\right)',
      '\\nabla \\times \\mathbf{B} = \\mu_0 \\left( \\mathbf{J} + \\varepsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t} \\right)'
    ],
    images: [ampereLawImage],
  }
];

const DynamicAccordion = ({ title, description, formulas, images }) => (
  <Card sx={{ minWidth: 325, minHeight: 325, position: 'relative' }} className="my-5">
    <CardContent>
      <div className="relative">
        {images?.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={title}
              className="absolute mt-20 w-8/12 sm:w-7/12 md:w-3/12 lg:w-4/12 h-auto object-cover"
            />
          </div>
        ))}
        <Accordion defaultExpanded className="relative z-10 bg-white bg-opacity-75">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${title.replace(/\s+/g, '-').toLowerCase()}-content`}
            id={`${title.replace(/\s+/g, '-').toLowerCase()}-header`}
          >
            <Typography variant="h6" className="font-extrabold">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {description?.map((desc, index) => (
              <Typography key={index} className="text-justify">
                {desc}
              </Typography>
            ))}
            {formulas?.map((formula, index) => (
              <BlockMath key={index} math={formula} />
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </CardContent>
  </Card>
);

DynamicAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  formulas: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function MaxwellEquation() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {equations?.map((eq, index) => (
          <DynamicAccordion 
            key={index}
            title={eq.title}
            description={eq.description}
            formulas={eq.formulas}
            images={eq.images}
          />
        ))}
      </div>
    </div>
  );
}
