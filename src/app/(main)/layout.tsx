import { Navigation } from "@/components/ui/Navigation";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {/* Spacer para compensar la navegación fija */}
      <Box height="80px" />
      {children}
    </>
  );
}