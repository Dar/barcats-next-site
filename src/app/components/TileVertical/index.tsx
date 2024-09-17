"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import Button from "../Button";
import { useRouter } from "next/navigation";

export const TileVertical = ({
  title,
  text,
  slug,
  imageUrl,
}: {
  title: string;
  text: string;
  slug: string;
  imageUrl: string;
}) => {
  const router = useRouter();

  const handleServiceClick = (slug: string) => {
    router.push(`/services/${slug}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding:0,
          justifyContent: "flex-start",
        }}
      >
          <Box
            sx={{
              overflow: "hidden",
              height: 180,
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={imageUrl}
              alt={`Bar Cats cleaning service - ${title}`}
              sx={{
                transition: "transform 0.3s ease-in-out",
                height: "100%",
                width: "100%",
                objectFit: "cover",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          </Box>
          <Box sx={{
                padding:'0 10px',
                
              }}>
          <Typography 
              sx={{
                marginTop:'10px'
                
              }}
              gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography 
            sx={{
              textAlign:'left'
            }}
            variant="body2" color="text.secondary">
            {text}
          </Typography>
          </Box>
        <CardActions className="mt-auto w-full justify-end self-start flex ">
          <Button
            buttonAction={() => handleServiceClick(slug)}
            classNames="mt-10 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
