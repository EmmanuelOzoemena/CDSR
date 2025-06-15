"use client"
import { useState } from "react";

const DatabaseModal = ({ isOpen, onClose, onSave }) => {
  const [selectedDatabases, setSelectedDatabases] = useState([]);

  const databases = [
    "Nigerian Police Force",
    "EFCC",
    "Custom",
    "Immigration",
    "BVN",
    "NIN",
    "Driver License",
  ];

  const handleSelect = (db) => {
    if (selectedDatabases.includes(db)) {
      setSelectedDatabases(selectedDatabases.filter((item) => item !== db));
    } else {
      setSelectedDatabases([...selectedDatabases, db]);
    }
  };

  const handleRemoveTag = (db) => {
    setSelectedDatabases(selectedDatabases.filter((item) => item !== db));
  };

  const handleSave = () => {
    onSave(selectedDatabases);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__container">

        <div className="modal__container__search-db">
          <div className="">
            <input type="text" placeholder="Select Database" readOnly />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#101828"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="selected-tags">
          {selectedDatabases.map((db, index) => (
            <div key={index} className="tag">
              {db}
              <span className="remove-tag" onClick={() => handleRemoveTag(db)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0001 13.0607L6.53039 18.5304L5.46973 17.4697L10.9394 12.0001L5.46973 6.53039L6.53039 5.46973L12.0001 10.9394L17.4697 5.46973L18.5304 6.53039L13.0607 12.0001L18.5304 17.4697L17.4697 18.5304L12.0001 13.0607Z"
                    fill="#0E0E2C"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>

        <div className="modal-content">
          <ul className="database-list">
            {databases.map((db, index) => (
              <li
                key={index}
                className={`database-item ${
                  selectedDatabases.includes(db) ? "selected" : ""
                }`}
                onClick={() => handleSelect(db)}
              >
                {db}
                {selectedDatabases.includes(db) && (
                  <span className="checkmark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="black"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="button-group">
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
          <button onClick={handleSave} className="save-button">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatabaseModal;
