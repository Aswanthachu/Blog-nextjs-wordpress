const Trending = ({ small }) => {
  return (
    <div
      className={`flex absolute ${
        small ? "top-5 right-5" : "top-5 right-5"
      } text-white gap-2 hover:scale-125`}
    >
      <svg
        viewBox="0 0 30 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${small ? "w-5" : "w-6"}`}
      >
        <path
          d="M20.691 0.185181L24.0553 3.5495L16.8859 10.7189L11.0094 4.84234L0.123108 15.7433L2.19459 17.8148L11.0094 9L16.8859 14.8765L26.1415 5.63567L29.5058 9V0.185181H20.691Z"
          fill="#F8F8F8"
        />
      </svg>
      <p className={`${small && "text-sm"}`}>Trending</p>
    </div>
  );
};

export default Trending;
