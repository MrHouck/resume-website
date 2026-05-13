import { SOURCE_SERIF, JETBRAINS_MONO } from "@/utils/constants";
import Bibliography from "@/components/Bibliography";
import MDXParagraph from "@/components/MDXParagraph";

const mdxComponents = {
  Bibliography,
  h1: (props) => (
    <h1 className={`${SOURCE_SERIF.className} mt-2 mb-5 text-[26px] font-normal tracking-[-0.01em] text-(--primary-text)`} {...props} />
  ),

  h2: ({ children, ...props }) => (
    <div className="mt-10 mb-4">
      <div className="w-6 h-px bg-(--accent) mb-3" />
      <h2 className={`${SOURCE_SERIF.className} text-[22px] font-normal tracking-[-0.015em] text-(--primary-text)`} {...props}>{children}</h2>
    </div>
  ),

  h3: ({ children, ...props }) => (
    <div className="mt-8 mb-3">
      <h3 className={`${SOURCE_SERIF.className} text-[17px] font-normal text-(--secondary-text)`} {...props}>{children}</h3>
    </div>
  ),

  p: MDXParagraph,

  a: (props) => (
    <a
      className="text-(--primary-text) underline underline-offset-2 decoration-(--accent) hover:text-(--accent) transition-colors"
      {...props}
    />
  ),

  hr: (props) => (
    <hr className="my-6 border-t border-(--border)" {...props} />
  ),

  ol: (props) => (
    <ol className={`${SOURCE_SERIF.className} pl-5 text-(--secondary-text) mb-5 list-decimal text-[17px] leading-[1.65]`} {...props} />
  ),

  ul: (props) => (
    <ul className={`${SOURCE_SERIF.className} pl-5 mb-5 text-(--secondary-text) list-disc text-[17px] leading-[1.65]`} {...props} />
  ),

  li: (props) => <li className="mb-2" {...props} />,

  img: (props) => (
    <img className="max-w-full h-auto" {...props} />
  ),

  figure: (props) => (
    <figure className="flex flex-col items-center w-full mb-6" {...props} />
  ),

  figcaption: (props) => (
    <figcaption className={`${JETBRAINS_MONO.className} mt-2 text-[10px] tracking-widest uppercase text-center text-(--tertiary-text)`} {...props} />
  ),

  blockquote: (props) => (
    <blockquote
      className={`${SOURCE_SERIF.className} pl-5 pr-4 py-3 mb-6 border-l-2 border-(--accent) text-(--secondary-text) italic text-[17px] leading-[1.65] [&>p]:mb-0`}
      {...props}
    />
  ),

  span: ({ className, ...props }) => {
    if (className && className.includes("katex")) {
      return (
        <span
          className={`relative inline-block rounded-md p-2 bg-(--button-highlight) text-(--secondary-text) ${className}`}
          {...props}
        />
      );
    }
    return <span className={className} {...props} />;
  },
};

export default mdxComponents;
