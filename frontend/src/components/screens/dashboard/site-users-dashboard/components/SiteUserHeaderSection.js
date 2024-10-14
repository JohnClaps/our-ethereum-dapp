import React, { useState, useEffect } from 'react';
import { Navbar, Form, FormControl, Button, Image, Badge, Modal, Dropdown } from 'react-bootstrap';
import { FaSearch, FaBell } from 'react-icons/fa';
import Avatar from 'react-avatar-edit'; // Avatar uploader package
import logo from '../../../../images/logo.png';
import '../../site-admin/styles/Header.css';

const SiteUserHeaderSection = () => {
  const [preview, setPreview] = useState(null); // For previewing the avatar
  const [showModal, setShowModal] = useState(false); // For controlling modal visibility
  const [notifications, setNotifications] = useState([]); // List of notifications
  const [unreadCount, setUnreadCount] = useState(3); // Unread notifications count (initially set to 3)

  // Load the saved profile image from localStorage when the component mounts
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setPreview(savedImage);
    }
  }, []);

  // Handle the upload and preview of the new avatar image
  const onCrop = (preview) => {
    setPreview(preview); // Save the cropped image to state
  };

  const onClose = () => {
    setPreview(null); // Remove the preview if closed
  };

  // Handle modal open/close
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => {
    setShowModal(false);

    // Save the chosen image to localStorage
    if (preview) {
      localStorage.setItem('profileImage', preview);
    }
  };

  // Mark notifications as read
  const markNotificationsAsRead = () => {
    setUnreadCount(0); // Clear unread notifications
  };

  // Add a new notification (simulating the arrival of a notification)
  const addNotification = (message) => {
    setNotifications([...notifications, message]); // Add a new notification to the list
    setUnreadCount(unreadCount + 1); // Increase unread notification count
  };

  return (
    <>
      <Navbar className="header-section shadow-sm bg-white px-4 py-3" expand="lg">
        {/* Logo */}
        <Navbar.Brand href="/">
          <Image src={logo} alt="Logo" width={120} height={50} />
        </Navbar.Brand>

        {/* Search Bar */}
        <Form className="d-flex mx-auto" style={{ width: '40%' }}>
          <FormControl
            type="search"
            placeholder="Search..."
            className="me-2 rounded-pill border-0 shadow-sm px-4"
            aria-label="Search"
          />
          <Button variant="outline-success" className="rounded-pill px-3">
            <FaSearch />
          </Button>
        </Form>

        {/* Right Section: Notifications & Avatar */}
        <div className="d-flex align-items-center">
          {/* Notifications Icon */}
          <Dropdown align="end" className="notification-dropdown">
            <Dropdown.Toggle variant="link" id="dropdown-notifications" className="position-relative me-4">
              <FaBell size={24} />
              {unreadCount > 0 && (
                <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                  {unreadCount}
                </Badge>
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-right notification-tray shadow" style={{ minWidth: '300px' }}>
              <Dropdown.Header>Notifications</Dropdown.Header>
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <Dropdown.Item key={index}>
                    {notification}
                  </Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item>No new notifications</Dropdown.Item>
              )}
              <Dropdown.Divider />
              <Dropdown.Item onClick={markNotificationsAsRead}>Mark all as read</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Avatar Image */}
          <div onClick={handleModalOpen} style={{ cursor: 'pointer' }}>
            <Image
              src={preview ? preview : '/default-profile.png'} // Default image if no preview
              alt="Profile"
              roundedCircle
              width={40}
              height={40}
              className="ms-3"
            />
          </div>
        </div>
      </Navbar>

      {/* Avatar Uploader Modal */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Avatar
            width={390}
            height={295}
            onCrop={onCrop}
            onClose={onClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SiteUserHeaderSection;
