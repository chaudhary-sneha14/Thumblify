import React from "react";
import { colorSchemes } from "../assets/assets";

const ColorSchemeSelector = ({ value, onChange }) => {
  return (
    <div className="relative space-y-3 dark">
      <label className="block text-sm font-medium text-zinc-200">
        Color Scheme
      </label>
      <div className="grid grid-cols-6 gap-3">
        {colorSchemes.map((scheme) => {
            const selected = value === scheme.id;
          return (
            <button
              key={scheme.id}
              className={` h-10 rounded-lg flex overflow-hidden ${selected && 'ring-2 ring-violet-500'}`}
              title={scheme.name}
              onClick={()=>onChange(scheme.id)}
            >
              {/* Use scheme.colors instead of colorSchemes[0].colors */}
              {scheme.colors.map((c, idx) => (
                <div
                  key={idx}
                  className="w-full flex-1"
                  style={{ backgroundColor: c }}
                />
              ))}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-zinc-400">Selected: {colorSchemes.find((s)=>s.id===value)?.name}</p>
    </div>
  );
};

export default ColorSchemeSelector;
