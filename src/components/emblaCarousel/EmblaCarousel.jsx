import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./EmblaCarouselSelectedSnapDisplay";
import styles from "./embla.module.css";
import { Box, Paper } from "@mantine/core";

const EmblaCarousel = (props) => {
  const { slides, options, controls } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.embla_viewport} ref={emblaRef}>
        <div className={styles.embla_container}>
          {slides.map((i) => (
            <Box key={i.id} className={styles.embla_slide}>
              <Paper  h={300}  withBorder></Paper>{" "}
            </Box>
          ))}
        </div>
      </div>
      {controls && (
        <Box className={styles.embla_controls}>
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </Box>
      )}
    </section>
  );
};

export default EmblaCarousel;
