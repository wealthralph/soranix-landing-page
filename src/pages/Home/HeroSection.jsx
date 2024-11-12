import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Highlight,
  Image,
  Paper,
  Space,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { GraphicsDashboardDisplay } from "./introSection/IntroSection";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const BoxRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Animate the title
      tl.fromTo(
        titleRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )

        // Animate the text after the title
        .fromTo(
          textRef.current,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.3" // Overlap animations slightly by starting the text 0.5 seconds before the title ends
        );
    },
    { scope: BoxRef }
  );

  const navigate = useNavigate()

  return (
    <Container fluid  className={styles.hero_main_wrapper}>
      <Stack
        gap={"xl"}
        size={"lg"}
        className={styles.hero_main_container}
        w={"100%"}
      >
        {/* Title and text content */}
        <Center>
          <Stack align="center">
            <Title
              ref={titleRef}
              ta={"center"}
              fz={{ xs: "h2", sm: "h1", md: 45, lg: 40 }}
              tt={"capitalize"}
              fw={700}
              maw={600}
            >
              Take control of Your Finances the Modern Way with AI
            </Title>
            <Text ta={"center"} size="xl" ref={textRef} maw={450}>
              Unlock the full potential of your finances .
            </Text>
            <motion.button
              whileHover={{ scale: 1.01, y: -3 }}
              whileTap={{ scale: 0.99 }}
              className={styles["hero_button"]}
              onClick={() => navigate('/early_access')}
            >
              Get Early Access
            </motion.button>
          </Stack>
        </Center>
        <Space h={50} />
        {/* Platform graphics */}
<Box>

        <Box className={styles.hero_main_image_wrapper}>
          <Box className={styles.hero_main_image_cont}>
          </Box>
        </Box>
        <Box h={30} maw={1080} mx={'auto'}  pos={'relative'}>
          <DottedGridCanvas/>
        </Box>
</Box>
      </Stack>

    </Container>
  );
};

export default HeroSection;


class DotGrid {
  constructor(canvas, dotSize, dotSpacing) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dotSize = dotSize;
    this.dotSpacing = dotSpacing;
    this.dots = [];
    this.colors = [
      "var(--mantine-color-blue-9)",
      "var(--mantine-color-blue-7)",
      "var(--mantine-color-pink-5)",
      "var(--mantine-color-blue-3)",
      "var(--mantine-color-blue-1)",
    ];
    this.padding = dotSize / 4;
    this.animationFrameId = null;
    this.setupGrid();
  }

  setupGrid() {
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;

    this.columns = Math.floor(
      this.canvasWidth / (this.dotSize + this.dotSpacing)
    );
    this.rows = Math.floor(
      this.canvasHeight / (this.dotSize + this.dotSpacing)
    );

    this.dots = Array.from({ length: this.rows }, (_, row) =>
      Array.from({ length: this.columns }, (_, col) => ({
        x: col * (this.dotSize + this.dotSpacing) + this.padding,
        y: row * (this.dotSize + this.dotSpacing) + this.padding,
        opacity: Math.random(), 
        color: this.getRandomColor(),
        flickerInterval: Math.random() * 100 + 100, 
        lastFlicker: performance.now(),
      }))
    );
  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  updateDots() {
    const now = performance.now();
    this.dots.forEach((row) => {
      row.forEach((dot) => {
        if (now - dot.lastFlicker > dot.flickerInterval) {
          dot.opacity = Math.random(); 
          dot.color = this.getRandomColor(); 
          dot.lastFlicker = now;
        }
      });
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.dots.forEach((row) => {
      row.forEach((dot) => {
        this.ctx.globalAlpha = dot.opacity;
        this.ctx.fillStyle = dot.color;
        this.ctx.beginPath();
        this.ctx.arc(dot.x, dot.y, this.dotSize / 2, 0, Math.PI * 2);
        this.ctx.fill();
      });
    });

    this.ctx.globalAlpha = 1; 
  }

  animate() {
    this.updateDots();
    this.draw();
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  start() {
    this.stop(); 
    this.animate(); 
  }

  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}



export const DottedGridCanvas = ({ dotSize = 2, dotSpacing = 5 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Set canvas dimensions to match its container
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    const dotGrid = new DotGrid(canvas, dotSize, dotSpacing);
    dotGrid.start();

    // Clean up animation on component unmount
    return () => dotGrid.stop();
  }, [dotSize, dotSpacing]);

  return <canvas  ref={canvasRef} style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }} />;
};

