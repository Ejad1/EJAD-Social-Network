import { PropTypes } from "prop-types";
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


export default function StoryCarousel({ elements }) {
    const storyElements = elements;
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = storyElements.length;

    console.log("Mon activeStep est : " + activeStep);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    useEffect(() => {
        if (maxSteps > 0 && activeStep >= maxSteps) {
          setActiveStep(0);
        }
    }, [elements, activeStep, maxSteps]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            { storyElements[activeStep].displayCommentaires && 
                <Paper
                    square
                    elevation={0}
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 40,
                    pl: 2,
                    bgcolor: 'background.default',
                    }}
                >
                    <Typography>{ storyElements[activeStep].commentaires }</Typography>
                </Paper>
            }

            { storyElements[activeStep].type === "Text"
                &&
                <div>
                    <Box
                        sx={{
                            minHeight: '400px',
                            display: 'block',
                            overflow: 'hidden',
                            width: '800px'
                        }}
                    >
                        <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '25%', fontSize: 'large' }}>
                            { storyElements[activeStep].file }
                        </Typography>
                    </Box>
                </div>
            }

            {
                storyElements[activeStep].type === "Image"
                    &&
                <Box
                    component="img"
                    sx={{
                        height: '480px',
                        display: 'block',
                        overflow: 'hidden',
                        width: '100%'
                    }}
                    src={ storyElements[activeStep].file }
                    alt= "Story image"
                />
            }

            {
                storyElements[activeStep].type === "Video"
                    &&
                <video controls width="100%" height="480px">
                    <source src={storyElements[activeStep].file} type="video/mp4" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
            }

            {/*  */}

            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    Next
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
                }
            />
        </Box>
    );
}

StoryCarousel.propTypes = {
    elements: PropTypes.array.isRequired
}
