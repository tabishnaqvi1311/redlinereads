export const getChapters = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_API_PUBLIC_URL}/api/chapter`, {
            cache: "no-store"
        })
        if (!response.ok) {
            throw new Error("Failed to fetch");
        }
        return response.json();
    }catch(e){
        console.log(e);
    }
}

export const getChapter = async(id: number) => {
    try{
        const response = await fetch(`${process.env.NEXT_API_PUBLIC_URL}/api/chapter/${id}`)
        if(!response.ok){
            throw new Error("Failed to fetch");
        }
        return response.json();
    }catch(e){
        console.log(e);
    }
}