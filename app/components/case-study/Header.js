const Header = ({ header }) => {
  return (
    <div className="mt-36 lg:mt-[232px] lg:ml-9 text-center text-tcs-white text-3xl lg:text-6xl tracking-normal mx-auto font-helvetica-neue-medium ">
      <div className="flex justify-center">
        <p className="lg:mr-5">{header?.title}</p>
      </div>
      <div className="flex mt-10 tracking-wide justify-center text-tcs-banana font-light text-base lg:text-2xl">
        {header?.tags?.map((tag, i) => (
          <p key={i} className="px-2 lg:px-3 ">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Header;
