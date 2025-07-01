import { PlayFilledAlt } from "@carbon/icons-react";
import React, { useEffect, useRef, useState } from "react";

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const mediaBoxRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const [cursorText, setCursorText] = useState<string>("");
  const [cursorTextColor, setCursorTextColor] = useState<string>("");
  const [cursorImage, setCursorImage] = useState<string>("");
  const [cursorIcon, setCursorIcon] = useState<string>("");

  let mouseX = 0,
    mouseY = 0;
  let currentX = 0,
    currentY = 0;
  let raf: number;

  useEffect(() => {
    const cursor = cursorRef.current;
    const inner = innerRef.current;

    if (!cursor || !inner) return;

    const updateMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      const cursorTarget = target?.closest(
        '[data-cursor-text], [data-cursor-image], [data-cursor-icon], [data-cursor-scale], [data-cursor-color], [data-cursor-blend]'
      ) as HTMLElement;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor-text") || "";
        const textColor = cursorTarget.getAttribute("data-cursor-text-color") || "";
        const image = cursorTarget.getAttribute("data-cursor-image") || "";
        const icon = cursorTarget.getAttribute("data-cursor-icon") || "";
        const scale = cursorTarget.getAttribute("data-cursor-scale");
        const color = cursorTarget.getAttribute("data-cursor-color");
        const blendMode = cursorTarget.getAttribute("data-cursor-blend") || "normal";

        setCursorText(text);
        setCursorTextColor(textColor);
        setCursorImage(image);
        setCursorIcon(icon);

        if (innerRef.current) {
          innerRef.current.style.transform = scale ? `scale(${scale})` : "scale(1)";
          innerRef.current.style.backgroundColor = color || "white";
        }

        if (cursorRef.current) {
          cursorRef.current.style.mixBlendMode = blendMode;
        }
      } else {
        setCursorText("");
        setCursorImage("");
        setCursorIcon("");

        if (innerRef.current) {
          innerRef.current.style.transform = "scale(1)";
          innerRef.current.style.backgroundColor = "white";
        }
      }
    };

    const animate = () => {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;

      currentX += dx * 0.2;
      currentY += dy * 0.2;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const directionX = distance !== 0 ? dx / distance : 0;
      const directionY = distance !== 0 ? dy / distance : 0;

      const stretch = Math.min(distance / 150, 0.35);
      const scaleX = 1 + stretch * Math.abs(directionX);
      const scaleY = 1 + stretch * Math.abs(directionY);

      cursor.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scaleX}, ${scaleY})`;

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updateMouse);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const mediaBox = mediaBoxRef.current;
    const textBox = textRef.current;
    const iconBox = iconRef.current;
    const inner = innerRef.current;

    if (!mediaBox || !textBox || !iconBox || !inner) return;

    if (cursorImage) {
      mediaBox.style.backgroundImage = `url(${cursorImage})`;
      mediaBox.style.backgroundSize = "cover";
      mediaBox.style.backgroundPosition = "center";
      mediaBox.style.backgroundRepeat = "no-repeat";
      mediaBox.style.display = "block";
      textBox.style.display = "none";
      iconBox.style.display = "none";
      inner.style.scale = "2";
    } else if (cursorText) {
      textBox.innerText = cursorText;
      textBox.style.display = "block";
      textBox.style.color = cursorTextColor || "white";
      mediaBox.style.display = "none";
      iconBox.style.display = "none";
      inner.style.scale = "2";
    } else if (cursorIcon) {
      iconBox.style.display = "flex";
      mediaBox.style.display = "none";
      textBox.style.display = "none";
      inner.style.scale = "2";
    } else {
      mediaBox.style.display = "none";
      textBox.style.display = "none";
      iconBox.style.display = "none";
      inner.style.scale = "1";
    }
  }, [cursorText, cursorImage, cursorIcon, cursorTextColor]);

  return (
    <div className="cb-cursor" ref={cursorRef}>
      <div className="cb-cursor-inner relative" ref={innerRef}>
        <div className="cb-cursor-media w-full h-full absolute" ref={mediaRef}>
          <div className="cb-cursor-media-box" ref={mediaBoxRef}></div>
        </div>
        <div className="cb-cursor-text" ref={textRef}></div>
        <div className="cb-cursor-icon" ref={iconRef}>{cursorIcon === "video" && <PlayFilledAlt size={4} color="#000" />}</div>
      </div>
    </div>
  );
};

export default Cursor;
