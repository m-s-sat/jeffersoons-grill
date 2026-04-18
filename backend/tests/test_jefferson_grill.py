"""Backend tests for Jefferson's Grill API"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')


class TestRoot:
    def test_root_message(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert "Jefferson's Grill" in r.json().get("message", "")


class TestReservations:
    """Reservation CRUD tests"""

    def test_create_reservation_valid(self):
        payload = {
            "name": "TEST_John Doe",
            "email": "test@example.com",
            "phone": "601-555-1234",
            "date": "2026-03-15",
            "time": "7:00 PM",
            "guests": 4,
            "occasion": "Birthday",
            "notes": "Window seat please"
        }
        r = requests.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["guests"] == 4
        assert "id" in data
        assert "_id" not in data

    def test_create_reservation_invalid_guests_zero(self):
        payload = {
            "name": "TEST_Jane",
            "email": "jane@example.com",
            "phone": "601-555-0000",
            "date": "2026-03-15",
            "time": "6:00 PM",
            "guests": 0
        }
        r = requests.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 400

    def test_create_reservation_invalid_guests_40(self):
        payload = {
            "name": "TEST_Big Party",
            "email": "party@example.com",
            "phone": "601-555-9999",
            "date": "2026-03-15",
            "time": "6:00 PM",
            "guests": 40
        }
        r = requests.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 400

    def test_list_reservations_no_mongodb_id(self):
        r = requests.get(f"{BASE_URL}/api/reservations")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        for item in data:
            assert "_id" not in item


class TestContact:
    """Contact message tests"""

    def test_create_contact_valid(self):
        payload = {
            "name": "TEST_Alice",
            "email": "alice@example.com",
            "subject": "Question",
            "message": "What are your hours?"
        }
        r = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["message"] == payload["message"]
        assert "_id" not in data

    def test_create_contact_no_subject(self):
        payload = {
            "name": "TEST_Bob",
            "email": "bob@example.com",
            "message": "Just saying hi!"
        }
        r = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert "id" in data

    def test_list_contact_no_mongodb_id(self):
        r = requests.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        for item in data:
            assert "_id" not in item
