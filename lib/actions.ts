export const getChapters = async () => {
    try {
        const response = await fetch(`https://redlinereads-j9l9vcwwn-tabishnaqvi1311.vercel.app/api/chapter`, {
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
        const response = await fetch(`https://redlinereads-j9l9vcwwn-tabishnaqvi1311.vercel.app/api/chapter/${id}`)
        if(!response.ok){
            throw new Error("Failed to fetch");
        }
        return response.json();
    }catch(e){
        console.log(e);
    }
}