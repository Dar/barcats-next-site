"use client";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

import Button from "../Button";
import { CardActions } from "@mui/material";

export const TileHorizontal = ({
  slug,
  title,
  text,
  imageUrl,
}: {
  slug: string;
  title: string;
  text: string;
  imageUrl: string;
}) => {
  const router = useRouter();
  const handleNavigation = (pageSlug: string) => {
    router.push(`/services/${pageSlug}`);
  };

  return (
    <>
      <Card sx={{ display: "flex", flex: 1 }}>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={imageUrl}
          alt={`Bar Cats cleaning service - ${title}`}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "flex-start",
            }}
          >
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="p"
            >
              {text}
            </Typography>
            <CardActions className="w-full mt-auto self-start flex justify-end">
              <Button
                buttonAction={() => handleNavigation(slug)}
                classNames="inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </Button>
            </CardActions>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};
