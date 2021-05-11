export class PointService {
    categoryList = [];
    pointList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getCategories() {
        try {
            const response = await fetch(this.baseUrl + "/api/categories")
            this.categoryList = await response.json();
            return this.categoryList;
        } catch (error) {
            return [];
        }
    }

    async getPoints() {
        try {
            const response = await fetch(this.baseUrl + "/api/points")
            this.pointList = await response.json();
            return this.pointList;
        } catch (error) {
            return [];
        }
    }

}