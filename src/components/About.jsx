import React from 'react';
import { Card, Container, Typography as MuiTypography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from './Layout';
import ContactButton from './ContactButton';
import { styled } from '@mui/system';
import WhyWeCareForU from './WhyWeCareForU';
import CardHeader from './CardHeader';
import OfferBanner from './OfferBanner';
// import Sidebar from './SidePanel';

const Accordion = styled(MuiAccordion)(({ theme }) => ({
  border: 'none',
  borderRadius: '8px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(2),
  backgroundColor: '#f0f0f0', // Change the accordion background color
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  borderRadius: '8px 8px 0 0',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderRadius: '0 0 8px 8px',
}));

function About() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const sectionStyle = {
    backgroundColor: '#f7f7f7',
    padding: '100px',
    textAlign: 'center',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    
  };

  const titleStyle = {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
    fontFamily: 'cursive',
    textTransform: 'uppercase',
    
  };

  const paragraphStyle = {
    fontSize: '1.5rem',
    color: '#555',
    lineHeight: '1.6',
  };

  const decorationStyle = {
    width: '100%',
    height: '5px',
    backgroundColor: '#3498db',
    position: 'absolute',
    bottom: '0',
  };




  const faqData = [
    {
        question: 'How can I start a fundraiser?',
        answer: 'To start a fundraiser, navigate to the "Start Your Fundraiser" page and follow the step-by-step instructions. Provide necessary details, set a goal, and share your campaign with others.',
    },
    {
        question: 'Is there a fee for using the platform?',
        answer: 'Our platform charges a small fee to cover operational costs. This fee is transparently displayed during the fundraiser setup process.',
    },
    {
        question: 'How can I make a donation?',
        answer: 'To make a donation, visit the "Explore Campaigns" page, choose a campaign you wish to support, and click on the "Make a Donation" button. Follow the prompts to complete the donation.',
    },
    {
        question: 'Can I donate anonymously?',
        answer: 'Yes, during the donation process, you have the option to donate anonymously. Your personal information will not be publicly displayed.',
    },
    {
        question: 'How do I share my fundraiser with others?',
        answer: 'After creating your fundraiser, you will receive a unique link to your campaign page. Share this link through social media, emails, or other channels to reach a wider audience.',
    },
    {
        question: 'Can I edit my fundraiser details after creation?',
        answer: 'Yes, you can edit your fundraiser details by logging into your account and navigating to the "My Fundraisers" section. Find your fundraiser and click on the "Edit" button.',
    },
    {
        question: 'What happens if my fundraiser does not reach its goal?',
        answer: 'If your fundraiser does not reach its goal, you still keep the funds you\'ve raised. Consider extending the campaign duration or sharing it with more people to increase support.',
    },
    {
        question: 'Are donations tax-deductible?',
        answer: 'The tax-deductibility of donations depends on the nature of the campaign. Some campaigns may qualify for tax deductions, while others may not. Check with local tax authorities or consult a tax professional.',
    },
  ];

  return (
    <Layout>
      {/* <Sidebar style={{ marginTop: '1000px' }}/> */}
      <Container className='abcd'>
      <div style={sectionStyle}>
      <MuiTypography variant="h4" style={titleStyle} gutterBottom>
        About Us - WeCareForYou
      </MuiTypography>
      <div style={decorationStyle}></div>
      <MuiTypography paragraph style={paragraphStyle}>
        Welcome to WeCareForYou, a compassionate and dedicated platform committed to making a positive impact on the world. At WeCareForYou, we believe in the transformative power of collective giving, where every act of kindness and generosity contributes to creating a better future for those in need.
      </MuiTypography>
      </div>
                

      <Card>
  <CardHeader><h2><b>WHY WeCareForYou!!!</b></h2></CardHeader>
  {/* Other card content goes here */}

                    <WhyWeCareForU/>
                    </Card>
                <MuiTypography paragraph>
                    {/* (list of points without repeated information) */}
                </MuiTypography>

                <MuiTypography paragraph>
                    Join us on this journey of care, kindness, and community. Together, let's create a world where everyone has the opportunity to thrive, and where the collective spirit of WeCareForYou makes a lasting impact on the lives of those in need.
                </MuiTypography>
                <OfferBanner/>
                


        <div>
        <section className="container1">
    <div className="title1">
    <h2>Frequently Asked Questions</h2>
    <div className="underline1"></div>
    </div>
    </section>

        {faqData.map((faq, index) => (
            <Accordion key={index} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}bh-content`} id={`panel${index + 1}bh-header`}>
                <MuiTypography sx={{ width: '100%', flexShrink: 0, textAlign: 'left', color: '#333' }}>
                  {/* Change the text color */}
                  {faq.question}
                </MuiTypography>
              </AccordionSummary>
              <AccordionDetails>
                <MuiTypography sx={{ color: 'black'}}>
                  {/* Change the text color */}
                  {faq.answer}
                </MuiTypography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <MuiTypography paragraph>
                    Thank you for being a part of WeCareForYou – where every donation counts, and every act of kindness matters.
                </MuiTypography>
        <ContactButton />
      </Container>
    </Layout>
  );
}

export default About;
