export const Ping = () => {
  return (
    <span className="flex h-[11px] w-[11px]">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-700 opacity-75"></span>
      <span className="relative inline-flex h-[11px] w-[11px] rounded-full bg-pink-700"></span>
    </span>
  );
};
