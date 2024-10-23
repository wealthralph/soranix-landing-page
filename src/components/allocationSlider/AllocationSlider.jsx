import { Box } from "@mantine/core";
import { Fragment, useEffect, useRef } from "react";
import styles from "./AllocationSlider.module.css";
import { useState } from "react";
import { clamp, useMove } from "@mantine/hooks";
import { IconGripVertical } from "@tabler/icons-react";
import { Draggable } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(Draggable);

const AssetAllocationSlider = ({ assets }) => {
  const [barWidths, setBarWidths] = useState(assets.map((i) => i.value * 100));
  const trackRef = useRef(null);
  const thumbRefs = useRef([]);

  useEffect(() => {
    const updateWidths = (index, x) => {
      const totalWidth = trackRef.current.offsetWidth;
      const leftBarWidth = barWidths[index];
      const rightBarWidth = barWidths[index + 1];

      // Calculate new widths based on drag position
      const newLeftWidth = Math.max(0, leftBarWidth + (x / totalWidth) * 100);
      const newRightWidth = Math.max(0, rightBarWidth - (x / totalWidth) * 100);

      // Ensure the total widths remain consistent
      const newWidths = [...barWidths];
      newWidths[index] = newLeftWidth;
      newWidths[index + 1] = newRightWidth;

      const totalAdjusted = newWidths.reduce((acc, width) => acc + width, 0);
      if (totalAdjusted > 100) {
        const scaleFactor = 100 / totalAdjusted;
        setBarWidths(newWidths.map((width) => width * scaleFactor));
      } else {
        setBarWidths(newWidths);
      }
    };

    // GSAP Draggable for thumbs
    const draggableInstances = thumbRefs.current.map((thumb, index) => {
      return Draggable.create(thumb, {
        type: "x",
        bounds: trackRef.current,
        onDrag: function () {
          const x = this.x; // Use this.x to get the x position of the thumb
          console.log("Thumb Dragging - x position: ", x); // Debugging to see thumb position
          updateWidths(index, x);
        },
        onDragEnd: function () {
          console.log("Drag ended at x: ", this.x); // Debugging to see where drag ends
        },
      });
    });

    return () => {
      draggableInstances.forEach((instance) => instance[0].kill()); // Make sure we properly clean up
    };
  }, [barWidths]);

  return (
    <div className={styles.track} ref={trackRef}>
      {barWidths.map((width, index) => (
        <Fragment key={assets[index].id}>
          {/* Render the bars with their respective colors */}
          <div
            className={styles.slider_bar}
            style={{ width: `${width}%`, backgroundColor: assets[index].color }}
          ></div>

          {/* Add a draggable thumb between bars */}
          {index < barWidths.length - 1 && (
            <div
              className={styles.thumb}
              ref={(el) => (thumbRefs.current[index] = el)}
              // We remove the left style here because GSAP will control the actual movement
            >
              <IconGripVertical stroke={1.5} />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default AssetAllocationSlider;

//  useEffect(() => {
//    const slider = sliderRef.current;
//    const handles = handlesRef.current;

//    const handleMouseDown = (e, index) => {
//      e.preventDefault();
//      setDraggingHandleIndex(index);
//      setInitialWidths([...assetWidths]);
//    };

//    const handleMouseMove = (e) => {
//      if (draggingHandleIndex !== null) {
//        const sliderRect = slider.getBoundingClientRect();
//        const deltaX = e.clientX - sliderRect.left;
//        const newWidth = (deltaX / sliderRect.width) * 100;
//        const minWidth = 5; // Minimum width for an asset

//        const newAssetWidths = [...assetWidths];
//        newAssetWidths[draggingHandleIndex] = Math.max(minWidth, newWidth);
//        newAssetWidths.slice(0, draggingHandleIndex).forEach((_, i) => {
//          newAssetWidths[i] = initialWidths[i];
//        });
//        newAssetWidths.slice(draggingHandleIndex + 1).forEach((_, i) => {
//          newAssetWidths[draggingHandleIndex + 1 + i] =
//            initialWidths[draggingHandleIndex + 1 + i];
//        });

//        setAssetWidths(newAssetWidths);
//      }
//    };

//    const handleMouseUp = () => {
//      setDraggingHandleIndex(null);
//    };

//    handles.forEach((handle, index) => {
//      handle.addEventListener("mousedown", (e) => handleMouseDown(e, index));
//    });

//    document.addEventListener("mousemove", handleMouseMove);
//    document.addEventListener("mouseup", handleMouseUp);

//    return () => {
//      handles.forEach((handle) => {
//        handle.removeEventListener("mousedown", handleMouseDown);
//      });
//      document.removeEventListener("mousemove", handleMouseMove);
//      document.removeEventListener("mouseup", handleMouseUp);
//    };
//  });
