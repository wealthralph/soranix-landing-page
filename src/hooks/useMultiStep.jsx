import { useState } from "react";

const useMultiStepForm = (steps) => {
  const [index, setIndex] = useState(1);

  const next = () => {
    setIndex((i) => {
      if (i >= steps) return i;
      return i + 1;
    });
  };

  const prev = () => {
    setIndex((i) => {
      if (i <= 1) return i;
      return i - 1;
    });
  };

  const resetSteps = () => {
    setIndex(1);
  };

  const goToStep = (step) => {
    if (step < 1 || step > steps) {
      return;
    }
    return setIndex(step);
  };

  return {
    next,
    prev,
    resetSteps,
    goToStep,
    isLastStep: index === steps,
    isFirstStep: index === 1,
    index,
  };
};

export default useMultiStepForm;
