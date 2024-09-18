import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DropDown = ({
  onDrop,
  subcategory,
  setSubcategory,
  setCategorizedData,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState("");

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
    setSelectedSubcategory("");
    setSelectedSubSubcategory("");
  };
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubcategoryChange = (event) => {
    const { value } = event.target;
    setSelectedSubcategory(value);
    setSelectedSubSubcategory("");
  };

  const handleSubSubcategoryChange = (event) => {
    const { value } = event.target;
    setSelectedSubSubcategory(value);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    console.log("Drag over event");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log("Drop event");

    if (
      selectedCategory !== "Income" &&
      (!selectedSubcategory || !selectedSubSubcategory)
    ) {
      toast.error("Please select all options to enable data mapping", {
        toastId: "selectOptions",
      });
      return;
    }
    if (selectedCategory == "Income" && !selectedSubcategory) {
      toast.error("Please select all options to enable data mapping", {
        toastId: "selectOptions",
      });
      return;
    }

    toast.dismiss("selectOptions");

    const droppedData = event.dataTransfer.getData("application/json");
    let droppedObjects;

    try {
      droppedObjects = JSON.parse(droppedData);

      if (!Array.isArray(droppedObjects)) {
        droppedObjects = [droppedObjects];
      }
    } catch (error) {
      toast.error("Invalid dropped data format", {
        toastId: "invalidData",
      });
      return;
    }
    // Fetch the authentication token from wherever you've stored it (e.g., local storage)
    const token = localStorage.getItem("jwtToken");

    // Include the token in the request headers
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // Update the subcategory state as before
    setSubcategory((prevState) => {
      const newSubcategory = { ...prevState };

      if (selectedCategory === "Income") {
        if (!newSubcategory[selectedCategory][selectedSubcategory]) {
          newSubcategory[selectedCategory][selectedSubcategory] = [];
        }

        newSubcategory[selectedCategory][selectedSubcategory].push(
          ...droppedObjects
        );
      } else {
        if (
          !newSubcategory[selectedCategory][selectedSubcategory][
            selectedSubSubcategory
          ]
        ) {
          newSubcategory[selectedCategory][selectedSubcategory][
            selectedSubSubcategory
          ] = [];
        }

        newSubcategory[selectedCategory][selectedSubcategory][
          selectedSubSubcategory
        ].push(...droppedObjects);
      }

      axios
        .post(
          `${apiUrl}/api/update-mapped-data`,
          {
            subcategory: newSubcategory,
          },
          { headers }
        )
        .then((response) => {
          // Handle success if needed
          const updatedMappedData = response.data;

          // Update the state with the updated mapped data
          setCategorizedData(updatedMappedData);

          // Optionally, you can show a success toast to inform the user
          toast.success("Mapped data updated successfully!", {
            toastId: "mappedDataUpdateSuccess",
          });
        })
        .catch((error) => {
          // Handle error here
          console.error("Failed to update mapped data:", error);

          // Show an error toast to inform the user about the failure
          toast.error("Failed to update mapped data. Please try again.", {
            toastId: "mappedDataUpdateError",
          });
        });

      return newSubcategory;
    });

    onDrop(droppedObjects);
  };

  return (
    <section>
      <div>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{ padding: "8px", width: "100%" }}
        >
          <option value="">Choose category</option>
          {subcategory &&
            Object.keys(subcategory).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
        <br />
        <select
          id="categorySelect"
          value={selectedSubcategory}
          onChange={handleSubcategoryChange}
          style={{ padding: "8px", width: "100%" }}
        >
          <option value="">Select captions</option>
          {selectedCategory &&
            subcategory[selectedCategory] &&
            Object.keys(subcategory[selectedCategory]).map((subcat, index) => (
              <option key={index} value={subcat}>
                {subcat}
              </option>
            ))}
        </select>
        <br />
        {selectedCategory !== "Income" && selectedSubcategory && (
          <select
            id="subSubCategorySelect"
            value={selectedSubSubcategory}
            onChange={handleSubSubcategoryChange}
            style={{ padding: "8px", width: "100%" }}
          >
            <option value="">Select sub-captions</option>
            {selectedCategory &&
              selectedSubcategory &&
              subcategory[selectedCategory][selectedSubcategory] &&
              Object.keys(
                subcategory[selectedCategory][selectedSubcategory]
              ).map((subsubcat, index) => (
                <option key={index} value={subsubcat}>
                  {subsubcat}
                </option>
              ))}
          </select>
        )}
        <br />
      </div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: "2px dashed #007bff",
          borderRadius: "10px",
          padding: "20px",
          width: "240px",
          color: "#007bff",
          textAlign: "center",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Drop items here
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={15000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default DropDown;
