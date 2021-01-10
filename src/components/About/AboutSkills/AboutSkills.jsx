import React from "react";
import "./index.scss";

export default function AboutSkills() {
  return (
    <div className="app_container">
      <div className="app_container__wrapper about_skills _flex">
        <h1 className="about_skills__heading bold-64">Skills</h1>
        <div className="about_skills__wrapper">
          <p className="__skill bold-16">
            Proofreading <SkillBar />
          </p>
          <p className="__skill bold-16">
            Social media management <SkillBar />
          </p>
          <p className="__skill bold-16">
            YouTube video creation and Channel management
            <SkillBar />
          </p>
          <p className="__skill bold-16">
            SEO Optimization <SkillBar />
          </p>
          <p className="__skill bold-16">
            Content creation and marketing <SkillBar />
          </p>
          <p className="__skill bold-16">
            Video editing and captioning. <SkillBar />
          </p>
        </div>
      </div>
    </div>
  );
}

function SkillBar() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="__bar_svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M4.81365 15.5042C4.54816 15.3812 4.23616 15.4247 4.01267 15.6152L1.01274 18.1802C0.846242 18.3227 0.750244 18.5311 0.750244 18.7501V23.25C0.750244 23.664 1.08624 24 1.50023 24H4.50016C4.91415 24 5.25014 23.664 5.25014 23.25V16.1852C5.25014 15.8927 5.07914 15.6272 4.81365 15.5042Z"
          fill="#DBB756"
        />
        <path
          d="M10.8134 10.3593C10.5494 10.2363 10.2359 10.2798 10.0124 10.4703L7.01249 13.0353C6.846 13.1778 6.75 13.3863 6.75 13.6053V23.25C6.75 23.664 7.08599 24 7.49998 24H10.4999C10.9139 24 11.2499 23.664 11.2499 23.25V11.0403C11.2499 10.7478 11.0789 10.4808 10.8134 10.3593Z"
          fill="#DBB756"
        />
        <path
          d="M16.8134 5.21443C16.5479 5.09143 16.2359 5.13493 16.0124 5.32542L13.0125 7.89036C12.846 8.03286 12.75 8.24136 12.75 8.46035V23.25C12.75 23.664 13.086 24 13.5 24H16.4999C16.9139 24 17.2499 23.664 17.2499 23.25V5.89541C17.2499 5.60292 17.0804 5.33742 16.8134 5.21443Z"
          fill="#DBB756"
        />
        <path
          d="M22.8132 0.0695637C22.5492 -0.0534334 22.2342 -0.0114344 22.0122 0.180561L19.0122 2.7455C18.8458 2.888 18.7498 3.09649 18.7498 3.31549V23.25C18.7498 23.664 19.0857 24 19.4997 24H22.4997C22.9137 24 23.2497 23.664 23.2497 23.25V0.750548C23.2497 0.458055 23.0802 0.191061 22.8132 0.0695637Z"
          fill="#DBB756"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
