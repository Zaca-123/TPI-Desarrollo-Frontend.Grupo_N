import axios, { AxiosInstance } from "axios";

export class AxiosService{
    
    private axiosInstance: AxiosInstance;
    static instance: AxiosService;
    
    constructor() {
        this.axiosInstance = axios.create({
        headers: {
            'Content-Type': 'application/json',
        },
        });
    
        // Add an interceptor to include the token in every request
        this.axiosInstance.interceptors.request.use((config: any) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
        }, (error: any) => {
        return Promise.reject(error);
        });
    }
    

    static getInstance(){
        if(!AxiosService.instance) {
            AxiosService.instance = new AxiosService();
        }
        return AxiosService.instance.axiosInstance
    }
}