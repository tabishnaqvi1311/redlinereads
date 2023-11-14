import mongoose, { Document } from "mongoose";

interface IChapter extends Document {
    chapterNumber: {
        type: Number
    },
    chapterTitle: {
        type: String
    },
    pages : {
        type: [String]
    }
}

const ChapterSchema = new mongoose.Schema({
    chapterNumber: {
        type: Number
    },
    chapterTitle: {
        type: String
    },
    pages : {
        type: [String]
    }
})

const Chapter = mongoose.models["Chapter"] || mongoose.model<IChapter>("Chapter", ChapterSchema);

export default Chapter;

