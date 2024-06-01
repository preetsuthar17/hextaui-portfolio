import React, { useRef } from "react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface AnimatedDockProps {
  className?: string;
  items: DockItemData[];
}

interface DockItemData {
  link: string;
  Icon: React.ReactNode;
  target?: string;
}

export const AnimatedDock = ({ className, items }: AnimatedDockProps) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mr-auto flex h-16 items-end gap-4 rounded-2xl bg-zinc-950 border-b border-white border-opacity-5 px-4 pb-3 z-[9999]",
        className
      )}
    >
      {items.map((item, index) => (
        <DockItem key={index} mouseX={mouseX}>
          <Link
            href={item.link}
            target={item.target}
            className="grow flex items-center justify-center w-full h-full"
          >
            {item.Icon}
          </Link>
        </DockItem>
      ))}
    </motion.div>
  );
};

export const DockItem = ({
  mouseX,
  children,
}: {
  mouseX: MotionValue;
  children: React.ReactNode;
}) => {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-zinc-900 flex items-center justify-center border-t border-r border-opacity-5 border-r-white border-t-white border-b-zinc-400 border-l-zinc-400 border-l border-b"
    >
      <div className="flex items-center justify-center w-full h-full grow">
        {children}
      </div>
    </motion.div>
  );
};
