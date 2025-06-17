import { HTMLMotionProps, motion } from "framer-motion";

interface IMainButtonProps extends HTMLMotionProps<"button"> {
  text: string;
}

export const MainButton = ({ text, className, ...props }: IMainButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-main text-white uppercase font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-out text-sm sm:text-base ${className}`}
      {...props}
    >
      {text}
    </motion.button>
  );
};
