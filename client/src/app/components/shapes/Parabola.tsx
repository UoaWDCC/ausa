const Practice = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Purple box at the bottom */}
      <div className="absolute bottom-0 h-1/3 w-full bg-[#8A99EE]" />

      {/* Parabola shape above the box */}
      <svg
        className="absolute bottom-1/3 h-2/3 w-full"
        viewBox="0 0 1440 1066"
        preserveAspectRatio="none"
      >
        <path
          fill="#8A99EE"
          d="M0,1066 Q720,0 1440,1066 L1440,1066 L0,1066 Z"
        />
      </svg>
    </div>
  )
}

export default Practice
