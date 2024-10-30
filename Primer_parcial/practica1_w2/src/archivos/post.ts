export interface Infpost {
    createdAt: Date;
    name:      string;
    avatar:    string;
    id:        string;
}

async function fetchData<Type>(url:string): Promise<Type[]> {
        try {
            const response = await fetch(url);
            return response.json();   
        } catch (error) {
            throw error;
        }
}

export {
    fetchData
}