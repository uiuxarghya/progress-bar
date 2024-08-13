interface ProgressBarConfig {
  /** The size (height) of the progress bar. Numeric values get converted to px. */
  size: number | string;
  /** Color of the progress bar. Also used for the glow around the bar. */
  color: string;
  /** Class name used for the progress bar element. */
  className: string;
  /** How many milliseconds to wait before the progress bar animation starts after calling .start(). */
  delay: number;
}

/* The ProgressBar class in TypeScript provides methods to show and animate a progress bar with
customizable options. */
export default class ProgressBar {
  /** Show the progress bar and begin animating it. */
  start: () => void;

  /** End the progress bar animation. */
  finish: () => void;

  private current!: HTMLElement; // The current progress bar element.
  private timeout: number | undefined | null = null; // Timeout ID for delaying the start of the progress bar animation.

  /**
   * The constructor function creates a progress bar with customizable options and methods to start and
   * finish the progress animation.
   * @param [options] - The `options` parameter in the constructor function is an optional object that
   * allows you to customize the configuration of the progress bar. It accepts a
   * `Partial<ProgressBarConfig>` type, which means it can contain a subset of properties defined in the
   * `ProgressBarConfig` interface.
   */
  constructor(options?: Partial<ProgressBarConfig>) {
    /* This code snippet is creating a `config` object of type `ProgressBarConfig` by using
    `Object.assign` to merge the default configuration values with any custom options provided in
    the `options` parameter of the constructor function. */
    const config: ProgressBarConfig = Object.assign(
      {
        size: 3,
        color: "#0cf",
        className: "progress-bar",
        delay: 80,
      },
      options
    );

    const initialStyle = ({
      position: "fixed",
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      border: "none",
      borderRadius: 0,
      backgroundColor: config.color,
      zIndex: 10000,
      height:
        typeof config.size === "number" ? `${config.size}px` : config.size,
      color: config.color,
      opacity: 0,
      width: "0%",
    } as unknown) as CSSStyleDeclaration;

    const startedStyle = {
      opacity: "1",
      width: "99%",
      transition: "width 10s cubic-bezier(0.1, 0.05, 0, 1)",
    } as CSSStyleDeclaration;

    const finishedStyle = {
      opacity: "0",
      width: "100%",
      transition: "width 0.1s ease-out, opacity 0.5s ease 0.2s",
    } as CSSStyleDeclaration;

    const glowStyle = {
      opacity: "0.4",
      boxShadow: "3px 0 8px",
      height: "100%",
    } as CSSStyleDeclaration;

    /* The `this.start` method in the `ProgressBar` class is responsible for initiating the progress bar
   animation. Here is a breakdown of what it does: */
    this.start = () => {
      if (this.current && this.current.parentNode) {
        this.current.parentNode.removeChild(this.current);
      }

      this.current = document.body.appendChild(document.createElement("div"));
      this.current.className = `${config.className} stopped`;
      Object.assign(this.current.style, initialStyle);

      const glow = this.current.appendChild(document.createElement("div"));
      glow.className = "glow";
      Object.assign(glow.style, glowStyle);

      if (this.timeout != null) {
        clearTimeout(this.timeout);
      }

      this.timeout = window.setTimeout(() => {
        this.timeout = null;
        this.current.className = `${config.className} started`;
        Object.assign(this.current.style, startedStyle);
      }, config.delay);

      // Force reflow
      this.current.scrollTop = 0;
    };

    /* The `this.finish` method in the `ProgressBar` class is responsible for ending the progress bar
   animation. Here is a breakdown of what it does: */
    this.finish = () => {
      if (this.timeout != null) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }

      if (this.current) {
        this.current.className = `${config.className} finished`;
        Object.assign(this.current.style, finishedStyle);
      }
    };
  }
}
