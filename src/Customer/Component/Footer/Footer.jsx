import { Grid, Typography, Button, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        {/* Company */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            About
          </Button>{" "}
          <br />
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Blogs
          </Button>{" "}
          <br />
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Press
          </Button>{" "}
          <br />
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Jobs
          </Button>{" "}
          <br />
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Partners
          </Button>{" "}
          <br />
        </Grid>

        {/* Solutions */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Marketing
          </Button>{" "}
          <br />
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Analytics
          </Button>{" "}
          <br />
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Commerce
          </Button>{" "}
          <br />
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Insight
          </Button>{" "}
          <br />
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Support
          </Button>{" "}
          <br />
        </Grid>

        {/* Documentation */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Guides
          </Button>{" "}
          <br />
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            API Status
          </Button>{" "}
          <br />
        </Grid>

        {/* Legal */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Claim
          </Button>{" "}
          <br />
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Privacy
          </Button>{" "}
          <br />
          <Button className="pb-5" variant="text" color="inherit" gutterBottom>
            Terms
          </Button>{" "}
          <br />
        </Grid>

        {/* Footer Text */}
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{' '}
            <Link href="https://www.freepik.com" color="inherit" underline="always">
              Freepik
            </Link>{' '}
            from{' '}
            <Link href="https://www.flaticon.com/" color="inherit" underline="always">
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
