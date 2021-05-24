import axios from "axios";
import {user} from "../stores";

export class PointService {
    categoryList = [];
    pointList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        if (localStorage.point) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.point);
        }
    }

    async getCategories() {
        try {
            const response = await axios.get(this.baseUrl + "/api/categories");
            this.categoryList = response.data;
            return this.categoryList;
        } catch (error) {
            return [];
        }
    }

    async getPoints() {
        try {
            const response = await axios.get(this.baseUrl + "/api/points");
            this.pointList = response.data;
            return this.pointList;
        } catch (error) {
            return [];
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token
                });
                localStorage.point = JSON.stringify(response.data.token);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: ""
        });
        this.pointList = [];
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.point = null;
    }

    async point(amount, method, category, location) {
        try {
            const point = {
                amount: amount,
                method: method,
                category: category,
                location: location
            };
            this.pointList.push(point);
            const response = await axios.post(this.baseUrl + "/api/categories/" + category._id + "/points", point);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }

    async updateSettings(firstName, lastName, email, password, id) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                _id: id
            };
            console.log(userDetails);
            const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            const response = await axios.post(this.baseUrl + "/api/users", userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }
}
