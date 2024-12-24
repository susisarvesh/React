import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkDownPreview() {
  const [text, setText] = useState("I just love __bold text__.");

    return (
      <>
      <h3 className="text-[30px] font-thin mb-10 mt-10">MarkDown Previewer: [useState, ReactMarkdown]</h3>

      
    <div className="flex flex-col items-center p-4 bg-gray-100">
      <a href="https://www.markdownguide.org/basic-syntax/"><h1 className="text-2xl font-bold mb-4 bg-gray-800 rounded-md p-2 text-white">Visit Markdown Previewer Syntax</h1></a>
      <div className="flex w-full max-w-4xl space-x-4">
        {/* Textarea for Markdown Input */}
        <textarea
          value={text}
          className="h-[300px] w-1/2 border border-gray-500 p-2 rounded-md resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your Markdown here..."
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* Markdown Preview */}
        <div
          className="h-[300px] w-1/2 border border-gray-500 p-4 rounded-md overflow-auto bg-white shadow-sm"
        >
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div> </>
  );
}

export default MarkDownPreview;
