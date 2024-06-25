import React from "react";
import Layout from "../Components/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:"center",
        p:2,
        "& h6":{
          fontWeight:'bold',
          my:2,
          fontSize:'2rem',

        },
        "& p":{
          textAlign:'justify',

        },
       ' @media (min-width:600px)':{
        mt:0,
        "& h4":{
          fontSize:'1rem',
        }

       }
      }}>
        <Typography variant="h6">Welcome to my restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
          scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
          nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
          aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim
          ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec
          vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
          non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
          purus. Mauris quis diam velit. Nullam vehicula, elit vel condimentum
          porta, purus ipsum volutpat libero, in tempor sapien eros sit amet
          eros. Fusce ultricies auctor nibh, ac hendrerit dui tempor eget. Nulla
          facilisi. Cras fringilla convallis sem vel faucibus. Morbi nec dolor
          suscipit, gravida lacus sit amet, laoreet nulla. Cras non velit nec
          nisi vulputate nonummy.
        </p><br/>


        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
          scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
          nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
          aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim
          ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec
          vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
          non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
          purus. Mauris quis diam velit. Nullam vehicula, elit vel condimentum
          porta, purus ipsum volutpat libero, in tempor sapien eros sit amet
          eros. Fusce ultricies auctor nibh, ac hendrerit dui tempor eget. Nulla
          facilisi. Cras fringilla convallis sem vel faucibus. Morbi nec dolor
          suscipit, gravida lacus sit amet, laoreet nulla. Cras non velit nec
          nisi vulputate nonummy.
        </p>
        
      </Box>
    </Layout>
  );
};

export default About;
