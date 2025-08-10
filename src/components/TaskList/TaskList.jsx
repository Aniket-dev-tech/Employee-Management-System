import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10 overflow-x-auto"
    >
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between text-sm items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">high</h3>
          <h4>10 Aug 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nihil
          neque reprehenderit, vel veniam sint.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between text-sm items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">high</h3>
          <h4>10 Aug 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nihil
          neque reprehenderit, vel veniam sint.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between text-sm items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">high</h3>
          <h4>10 Aug 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nihil
          neque reprehenderit, vel veniam sint.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between text-sm items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">high</h3>
          <h4>10 Aug 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nihil
          neque reprehenderit, vel veniam sint.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
