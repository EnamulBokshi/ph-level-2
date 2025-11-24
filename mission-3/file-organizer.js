const fs = require("fs");
const path = require("path");
const { getCallSites } = require("util");

const sourceDir = path.join(__dirname, "output", "messy-files"); // it will create a messy-files directory inside the output directory
const organizedDir = path.join(__dirname, "output", "organized");

const categories = {
    images: [".jpg", "jpeg", ".png", ".gif", ".bmp", ".svg"],
    documents: [".pdf", ".doc", ".docx", ".txt", ".pptx", ".rtf"],
    videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
    audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
    code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
    archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
    spreadsheets: [".xls", ".xlsx", ".csv"],
    others: [],
};

const testFiles = [
    "vacation.jpg",
    "report.pdf",
    "music.mp3",
    "presentation.pptx",
    "videos.mp4",
    "script.js",
    "data.csv",
    "archive.zip",
    "random.xyz",
    "app.py",
    "photo.png"
]

// we want to create directories for above files

// let's create a helper function to initialize directories 

function initializeDirectories(){
    if(!fs.existsSync(sourceDir)){
        fs.mkdirSync(sourceDir, {recursive: true});

        testFiles.forEach((file) => {
            fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`);
        })
    }
    console.log("Messy directories files are created!!!");
    if(!fs.existsSync(organizedDir)){
        fs.mkdirSync(organizedDir, {recursive:true}); 
    }
    Object.keys(categories).forEach(category => {
        const categoryPath = path.join(organizedDir, category);
        if(!fs.existsSync(categoryPath)){
            fs.mkdirSync(categoryPath);
        }
    })
}


function getFileCategory(fileName) { 
    const ext = path.extname(fileName); // .pdf, .png,....
    for(const [category, extensions] of Object.entries(categories)){
        if(extensions.includes(ext)) return category;
    }

    return "others";
 }



 function organizeFiles() {
    console.log("File organizer \n");
    console.log("Source directory: ", sourceDir);
    console.log("Destination directory: ", organizedDir);

    console.log("\n"+"-".repeat(50)+"\n");

    // lest read the source directory
    // it will provide the overall directory content

    const files = fs.readdirSync(sourceDir);

    // let's check whether the source directory is empty or not!!

    if(files.length === 0){
        console.log("No files to work on!!");
        console.log("exiting with error code -1");
        return;
    }
    console.log(`found ${files.length} files and directories`);

    const stats = {
        total: 0,
        byCategory: {}
    }

    files.forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const stat = fs.statSync(sourcePath);
        if(stat.isDirectory()){
            console.log("directory found. skipping it.")
            return;
        }
        const category = getFileCategory(file);
        const destDir = path.join(organizedDir, category);
        const destPath = path.join(destDir, file);
        fs.copyFileSync(sourcePath, destPath);

        stats.total ++;
        stats.byCategory[category] = (stats.byCategory[category] || 0) +1;
        console.log(`file name: ${file}`);
        console.log(`category: ${category}`);
        console.log(`size: ${stat.size}`)
        console.log("\n"+"#".repeat(20)+"\n");
    })
   }


function showHelp(){
    console.log(`
        file organizer - help 
        available commands:
        init - create files
        organize - organize files into categories

        `);
}

const command = process.argv[2];

switch(command){
    case "init":
        initializeDirectories();
        break;
    case "organize":
        organizeFiles();
        break;
    default:
        showHelp();
        break;
}