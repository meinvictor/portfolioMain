import styles from "./Progress.css";

const Progress = () => {
  return (
    <>
      <div className="progress">
        <div className="dashboard">
          <svg>
            <circle className="bg" cx="57" cy="57" r="52" />
            <circle className="meter-1" cx="57" cy="57" r="52" />
            <text x="50%" y="55%" textAnchor="middle" className="text">
              HTML/CSS
            </text>
          </svg>
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-2" cx="57" cy="57" r="52" />
            <text x="50%" y="55%" textAnchor="middle" className="text">
              JAVASCRIPT
            </text>
          </svg>
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-3" cx="57" cy="57" r="52" />
            <text x="50%" y="55%" textAnchor="middle" className="text">
              REACT
            </text>
          </svg>
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-4" cx="57" cy="57" r="52" />
            <text x="50%" y="55%" textAnchor="middle" className="text">
              REDUX
            </text>
          </svg>
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-5" cx="57" cy="57" r="52" />
            <text x="50%" y="55%" textAnchor="middle" className="text">
              GIT
            </text>
          </svg>
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-6" cx="57" cy="57" r="52" />
            <text x="50%" y="55%" textAnchor="middle" className="text">
              FIGMA
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Progress;
