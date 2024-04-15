const ToolTip = ({ text }: { text: string }) => {
  return (
    <section className='text-center w-full min-w-[6.9rem] relative top-[1.2rem] bg-gray-800 p-1 text-white text-xs rounded group-hover:opacity-100 opacity-0 pointer-events-none transition-opacity duration-300 -translate-y-20'>
      <span>{text}</span>
      <svg
        className='flex absolute bottom-[2.49rem] text-gray-800 h-2 w-full left-0 transform translate-y-[3.01rem]'
        x='0px'
        y='0px'
        viewBox='0 0 255 255'
        fill='currentColor'>
        <polygon points='0,0 127.5,127.5 255,0' />
      </svg>
    </section>
  );
};

export default ToolTip;
