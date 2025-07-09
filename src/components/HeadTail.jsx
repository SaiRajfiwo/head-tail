import React, { useState } from "react";

const HeadTail = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [grid, setGrid] = useState([]);
  const [lastChar, setLastChar] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!selectedValue) {
      setError("Please select value from dropdown");
      return;
    }
    setError("");

    setGrid((prevGrid) => {
      const newGrid = [...prevGrid.map((row) => [...row])];
      let rowIndex;

      if (!lastChar || selectedValue === lastChar) {
        newGrid.push([selectedValue]);
      } else {
        rowIndex = newGrid.length - 1;
        const row = newGrid[rowIndex];
        row.push(selectedValue);
      }

      const maxLength = Math.max(...newGrid.map((r) => r.length));
      newGrid.forEach((row) => {
        while (row.length < maxLength) row.push("");
      });

      return newGrid;
    });

    setLastChar(selectedValue);
    setSelectedValue("");
  };

  return (
    <div className="relative min-h-screen bg-[#000000] overflow-hidden flex items-center justify-center px-4">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#A2D5C6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#CFFFE2] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-200"></div>
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-[#F6F6F6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>

      {/* Main Card */}
      <div className="z-10 bg-[#F6F6F6] backdrop-blur-xl shadow-2xl rounded-3xl p-8 max-w-xl w-full border border-gray-200 text-center">
        <h1 className="text-3xl font-extrabold text-[#ff6b6b] mb-6 transition-all duration-300 hover:scale-105 hover:text-[#ff4d4d]">
          Head & Tail Game
        </h1>

        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            className="w-48 px-4 py-2 rounded-xl border border-gray-300 bg-white text-[#00332c] font-medium shadow-sm focus:outline-none transition-all duration-300 hover:border-[#20c997] hover:shadow-md hover:scale-105"
          >
            <option value="" className="text-[#888]">Select Value</option>
            <option value="H" className="hover:text-[#20c997]">H</option>
            <option value="T" className="hover:text-[#20c997]">T</option>
          </select>

          <button
            onClick={handleSubmit}
            className="bg-[#20c997] text-white font-semibold px-6 py-2 rounded-xl hover:bg-[#17b089] hover:scale-105 active:scale-95 transition-transform"
          >
            Submit
          </button>
        </div>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        {/* Transposed Output */}
        <div className="mt-6">
          <div className="flex justify-center gap-6">
            {(() => {
              const transposed = [];
              const maxCols = Math.max(...grid.map(r => r.length));

              for (let col = 0; col < maxCols; col++) {
                const column = [];
                for (let row = 0; row < grid.length; row++) {
                  column.push(grid[row][col] || "");
                }
                transposed.push(column);
              }

              return transposed.map((colArr, colIndex) => (
                <div key={colIndex} className="flex flex-col items-center gap-2">
                  {colArr.map((char, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="w-8 h-8 flex items-center justify-center font-bold text-lg text-[#00332c]"
                    >
                      {char}
                    </div>
                  ))}
                </div>
              ));
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadTail;
