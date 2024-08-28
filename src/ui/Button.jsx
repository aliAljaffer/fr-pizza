import { Link } from "react-router-dom";
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "text-sm m-1 inline-block rounded-full bg-stone-700  text-sm font-semibold uppercase tracking-wide text-sky-400 transition-colors duration-300 hover:bg-sky-300 hover:text-stone-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "text-sm m-1 inline-block rounded-full bg-transparent border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 text-sm font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-sky-300 hover:text-stone-600 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
