import { IconExternalLink } from "@tabler/icons-react";

export default function RosettaPage(){
    return (
        <div style={{ height: "80vh" }}>
        <iframe 
            src="https://totalwar-theboardgame.com/wp/wp-content/uploads/2023/12/Battleplay-Rules.pdf"
            width={"100%"} 
            height={"100%"}/>
        <a 
            href="https://totalwar-theboardgame.com/wp/wp-content/uploads/2023/12/Battleplay-Rules.pdf"
            target='_blank'
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <IconExternalLink/> Open in new tab
        </a>
        </div>
    )
}