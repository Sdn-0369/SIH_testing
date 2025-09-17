function AppBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-5 py-2 backdrop-blur-md">
      <div className="   rounded-xl h-10 flex items-center justify-between px-5  border-gray-200/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FC</span>
          </div>
          <div className="text-xl font-medium text-white tracking-wide font-mono">
            FloatChat
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center rounded-full gap-2 px-4 py-2 text-md font-medium text-gray-700 text-white cursor-pointer hover:shadow-sm shadow-white/20 shadow-rounded ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4"  >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;