/* eslint-disable no-console */
import { useState, useEffect } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Modal,
  Box,
  TextField,
  Typography,
} from "@mui/material";

import CreateProperty from "./create";
interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
}
const PropertyList = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );
  const [openModal, setOpenModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = () => {
    axios
      .get("http://localhost:5000/properties")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the properties!", error);
      });
  };

  const handleEditClick = (property: any) => {
    setSelectedProperty(property);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProperty(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSelectedProperty((prevProperty) => {
      if (!prevProperty) return prevProperty;

      return {
        ...prevProperty,
        [name]: value,
      } as Property;
    });
  };

  const handleSaveChanges = () => {
    if (selectedProperty) {
      axios
        .put(
          `http://localhost:5000/properties/${selectedProperty._id}`,
          selectedProperty,
        )
        .then((response) => {
          setProperties(
            properties.map((prop) =>
              prop._id === response.data._id ? response.data : prop,
            ),
          );
          handleCloseModal();
        })
        .catch((error) => {
          console.error("There was an error updating the property!", error);
        });
    }
  };

  const handleDeleteProperty = () => {
    if (selectedProperty) {
      axios
        .delete(`http://localhost:5000/properties/${selectedProperty._id}`)
        .then(() => {
          setProperties(
            properties.filter((prop) => prop._id !== selectedProperty._id),
          );
          handleCloseModal();
        })
        .catch((error) => {
          console.error("There was an error deleting the property!", error);
        });
    }
  };

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography
          gutterBottom
          style={{ textDecoration: "underline" }}
          variant="h4"
        >
          Properties Listed
        </Typography>
        <Button
          color="primary"
          variant="contained"
          onClick={handleOpenCreateModal}
        >
          Add Property
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "underline",
                }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "underline",
                }}
              >
                Description
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "underline",
                }}
              >
                Price
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "underline",
                }}
              >
                Location
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "underline",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.map((property) => (
              <TableRow key={property._id}>
                <TableCell sx={{ color: "white" }}>{property.title}</TableCell>
                <TableCell sx={{ color: "white" }}>
                  {property.description}
                </TableCell>
                <TableCell sx={{ color: "white" }}>${property.price}</TableCell>
                <TableCell sx={{ color: "white" }}>
                  {property.location}
                </TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => handleEditClick(property)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit/Delete Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
             transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "gray",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }} sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
        
        >
          <Typography gutterBottom component="h2" variant="h6">
            Edit Property
          </Typography>
          {selectedProperty && (
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={selectedProperty?.title || ""}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                multiline
                label="Description"
                name="description"
                rows={3}
                value={selectedProperty?.description || ""}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Price"
                name="price"
                type="number"
                value={selectedProperty?.price || ""}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={selectedProperty?.location || ""}
                onChange={handleChange}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Button
                  color="error"
                  variant="contained"
                  onClick={handleDeleteProperty}
                >
                  Delete
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>

      {/* Create Property Modal */}
      <Modal open={openCreateModal} onClose={handleCloseCreateModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "gray",
            borderRadius: "8px",
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            component="h2"
            sx={{ textAlign: "center", marginBottom: "10px", marginTop: "5px" }}
            variant="h4"
          >
            Create New Property
          </Typography>
          <CreateProperty
            onClose={handleCloseCreateModal}
            onPropertyCreated={() => {
              fetchProperties();
              handleCloseCreateModal();
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              marginBottom: "5px",
            }}
          >
            <Button
              color="error"
              sx={{ ml: 2 }}
              variant="contained"
              onClick={handleCloseCreateModal}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default PropertyList;
